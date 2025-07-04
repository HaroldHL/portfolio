import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

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

  // useIsomorphicLayoutEffect(() => {
  //   stagger(
  //     [textOne.current, textTwo.current, textThree.current, textFour.current],
  //     { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
  //     { y: 0, x: 0, transform: "scale(1)" }
  //   );
  // }, []);

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
        />
        <div className="laptop:flex laptop:items-center laptop:justify-between">
          <div className="laptop:mt-20 laptop:ml-20 mt-5 ml-6">
          <div className="mt-3 laptop:ml-20">
            <img className="h-80 w-80 rounded-md" src="images/profile.JPG"></img>
          </div>

          <Socials className="mt-2  laptop:ml-20 ml:10 laptop:mt-5" />
        </div>

        <div className="mt-3  laptop:ml-20 p-2 laptop:p-0" ref={aboutRef}>
          <p className="tablet:m-5 mt-2 text-xl laptop:text-xl w-full laptop:w-4/5">
            Hi 👋, I'm Harold — a software engineer with 6 years of experience building real-world products across Australia, the U.S., and China.  I’ve worked in fast-paced startups, a specialised EHS SaaS company, and larger internet firms, wearing different hats and always staying hands-on. 
          </p>
          <p className="tablet:m-5 mt-2 text-xl laptop:text-xl w-full laptop:w-4/5">I’m a results-focused team player with strong self-drive. I care about building software that’s not just functional, but genuinely useful, intuitive, and grounded in real user needs — delivered with clarity, craft, and care.</p>
          <p className="tablet:m-5  text-xl laptop:text-xl w-full laptop:w-4/5">I'm currently based in Sydney 🇦🇺, open to new opportunities where I can contribute meaningfully and keep growing with great people.</p>
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
