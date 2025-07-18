import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";
import CalendlyButton from "../CalendlyButton";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <div className="laptop:flex items-center justify-between">
              <div className="laptop:text-xl flex flex-col">
                <h2>Harold Yin</h2>
                <div>NSW, Australia</div>
              </div>
              <div className="">
              <Socials showTel={true} showEmail={false}/>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
