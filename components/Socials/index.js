import React from "react";
import Button from "../Button";

const Socials = ({ className, showTel }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {showTel && (
        <Button key={0} onClick={() => {
          const p1 = "0480";
          const p2 = "571";
          const p3 = "345";
          window.location.href = `tel:${p1}${p2}${p3}`;}}
        >
        <img
          className="h-5 mr-2 mb-1"
          src={`/images/phone.svg`}
        ></img> Telephone
      </Button>
      )}
      <Button key={1} onClick={() => window.open("https://www.linkedin.com/in/haroldyin-dev/")}>
        <img
          className="h-5 mr-2 mb-1"
          src={`/images/linkedin.svg`}
        ></img> LinkedIn
      </Button>
      <Button key={2} onClick={() => window.open("https://github.com/HaroldHL")}>
          <img
          className="h-5 mr-2 mb-1"
          src={`/images/github.svg`}
        ></img>  Github
      </Button>
      <Button key={3} onClick={() => window.open("mailto:haroldyin@outlook.com")}>
        <img
          className="h-6 mr-2 mb-1"
          src={`/images/email.svg`}
        ></img>
        haroldyin@outlook.com
      </Button>
    </div>
  );
};

export default Socials;
