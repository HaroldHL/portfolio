import { useRef, useState } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import ProjectResume from "../components/ProjectResume";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import { resume } from "../data/portfolio.json";
import { useTheme } from "next-themes";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {

  const experiences = [
    {
      company: "Trip.com Group",
      title: "Lead Software Engineer",
      time: "2021.4 — 2025.5",
      extraTitle: "",
      about: "Trip.com Group Limited is a leading global one-stop travel platform, integrating a comprehensive suite of travel products and services and differentiated travel content. It is the go-to destination for many travelers in Asia, and increasingly for travelers around the world, to explore travel, get inspired, make informed and cost-effective travel bookings, enjoy hassle-free on-the-go support, and share travel experience. Founded in 1999 and listed on NASDAQ in 2003 and HKEX in 2021, the Company currently operates under a portfolio of brands, including Ctrip, Qunar, Trip.com and Skyscanner, with the mission \"to pursue the perfect trip for a better world\".",
      website: "https://group.trip.com/",
    },
    {
      company: "Benchmark Gensuite",
      title: "Product Developer",
      extraTitle: "Associate Product Developer",
      time: "2019.6 — 2021.4",
      about: "Benchmark Gensuite® is a leading provider of cloud-based software solutions for Environmental, Health, and Safety (EHS), Sustainability, Quality, and Environmental, Social, and Governance (ESG) management. With a foundation rooted in over 25 years of domain expertise, the company delivers a unified digital platform designed to help organisations enhance compliance, reduce operational risks, and drive sustainable performance. Headquartered in Mason, Ohio, Benchmark Gensuite® serves a diverse range of industries, including aerospace, automotive, manufacturing, energy, and chemicals. Its platform integrates a comprehensive suite of applications covering incident management, regulatory compliance, auditing, operational safety, and quality control. This holistic approach enables organisations to manage their EHS and ESG responsibilities effectively across global operations. ",
      website: "https://benchmarkgensuite.com/",
    },
    {
      company: "Prosper Education",
      title: "Web Developer (Intern)",
      time: "2018.8 — 2019.4",
      extraTitle: "",
      about: "Prosper Education is a British education company creating the world’s best learning experiences for young children around the globe. We deliver an entire learning ecosystem teaching English and 21st Century skills. RoyalABC™ supports teachers in the classroom and parents at home to ensure that each child develops the essential skills to thrive and compete in the future global economy.",
      website: "https://royalabc.com/gb/"
    },
  ];
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const experienceRef = useRef();
  const theme = useTheme();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = experiences[selectedIndex];

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleExperienceScoll = () => {
    window.scrollTo({
      top: experienceRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  }

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
          handleExperienceScoll={handleExperienceScoll}
        />
        <div className="laptop:flex laptop:items-center laptop:justify-between">
          <div className="laptop:mt-20 laptop:ml-20 mt-5 ml-6">
          <div className="mt-3 laptop:ml-20">
            <img className="w-full h-80 rounded-md" src="images/profile.JPG"></img>
          </div>

          <Socials className="mt-2  laptop:ml-20 ml:10 laptop:mt-5" />
        </div>

        <div className="mt-3  laptop:ml-20 p-2 laptop:p-0" ref={aboutRef}>
          <p ref={textOne} className="tablet:m-5 mt-2 text-xl laptop:text-xl w-full laptop:w-4/5">
            Hi 👋, I&apos;m Harold — a software engineer with 6 years of experience building real-world products across Australia, the U.S., and China.  I&apos;ve worked in fast-paced startups, a specialised EHS SaaS company, and larger internet firms, wearing different hats and always staying hands-on. 
          </p>
          <p  ref={textTwo} className="tablet:m-5 mt-2 text-xl laptop:text-xl w-full laptop:w-4/5">I&apos;m a results-focused team player with strong self-drive. I care about building software that&apos;s not just functional, but genuinely useful, intuitive, and grounded in real user needs — delivered with clarity, craft, and care.</p>
          <p ref={textThree} className="tablet:m-5  text-xl laptop:text-xl w-full laptop:w-4/5">I&apos;m currently based in Sydney, NSW 🇦🇺, open to new opportunities across Australia (or remote) where I can contribute meaningfully and keep growing with great people.</p>
        </div>
        </div>

         <div className="mt-10 w-full flex flex-col items-center" ref={experienceRef}>
            <div
              className={`w-full ${
                theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
              } max-w-6xl p-20 mob:p-5 desktop:p-10 rounded-lg shadow-sm`}
            >
              <div className="mt-5">
                <h1 className="text-2xl font-bold laptop:text-center">Professional Experience</h1>

                <div className="mt-10 w-full flex flex-col laptop:flex-row items-start laptop:items-stretch gap-8">
                  {/* 左侧卡片 */}
                  <div className="laptop:w-2/3 w-full p-4 laptop:ml-20 bg-gray-100 rounded-2xl shadow-md">
                    <div className="flex  justify-between">
                      <h3 className="text-xl font-semibold mb-2">{selected.company}</h3>
                      <a
                      href={selected.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-black transition"
                      aria-label={`Visit ${selected.company} website`}
                    >
                     <img className="h-6" src="/images/link.svg"></img>
                    </a>
                    
                      </div>
                    <p className="text-base text-gray-700">{selected.about}</p>
                  </div>

                  {/* 右侧经历列表 */}
                  <div className="laptop:w-2/3 w-full flex flex-col mt-3 p-2 laptop:p-0">
                    
                    {experiences.map((exp, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedIndex(idx)}
                        className={`text-left border-l-2 pl-4 py-4 mb-4 transition-all ${
                          selectedIndex === idx ? "border-black bg-gray-50" : "border-gray-300"
                        }`}
                      >
                        <div className="text-sm text-gray-500">{exp.time}</div>
                        <div className="text-lg font-medium">{exp.company}</div>
                        <div className="text-sm text-gray-600">
                          {exp.title}
                        </div>
                        {exp.extraTitle !== "" && (
                          <div className="text-sm text-gray-600">
                          &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
                          </div>
                        )}
                        {exp.extraTitle !== "" && (
                          <div className="text-sm text-gray-600">
                            {exp.extraTitle}
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

        
        {/* <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">Work.</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div> */}

        {/* <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">Services.</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div> */}
        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}
        
        <Footer />
      </div>
    </div>
  );
}
