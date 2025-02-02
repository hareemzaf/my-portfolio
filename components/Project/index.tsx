import React from "react";
import Image from "next/image";

import projectImg1 from "../../public/assets/img/project1.jpg";

import ss from "./Project.module.scss";

type ProjectProps = {};

export const Project: React.FC<ProjectProps> = () => {
  return (
    <div className={ss.project} data-scroll data-scroll-offset="250">
      <a
        href="#"
        className={`${ss.img} reveal-img`}
        data-scroll
        data-scroll-call="dynamicBackground"
        data-scroll-repeat
      >
        <div data-scroll data-scroll-speed="-2">
          <Image src={projectImg1} alt="" />
        </div>
      </a>
      <div className={ss.content}>
        <h2>
          <span className={ss.number}>
            <b>0</b>
            <b>1</b>
            <b>.</b>
          </span>
          <span className={ss.title}>projects</span>
        </h2>
        <p>
         This project implements: a custom cursor, many different kinds of animations, scrolling animations, parallax effects when scrolling, cast
        </p>
      </div>
    </div>
  );
};
