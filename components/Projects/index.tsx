import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Project } from "../Project";

import ss from "./Projects.module.scss";

type ProjectsProps = {};

export const Projects: React.FC<ProjectsProps> = () => {
  return (
    <section className={ss.projects} data-scroll-section>
      <div className="container">
        <div
          className={ss.title}
          data-scroll
          data-scroll-offset="200"
        >
          <h3>LATEST WORKS</h3>
        </div>

        <div className={ss.inner}>
          {Array(3)
            .fill(0)
            .map((index: number) => (
              <Project key={index} />
            ))}
        </div>

        <Link
          href="/works"
          className={ss.btn}
          data-scroll
          data-scroll-offset="200"
        >
          <span>H</span>
          <span>E</span>
          <span>R</span>
          <span>E</span>
          <span> </span>
          <span className={ss.empty}> </span>

          <span>I</span>
          <span>S</span>
          <span className={ss.empty}> </span>
          <span> </span>
          <span>M</span>
          <span>Y</span>
          <span className={ss.empty}> </span>
          <span>S</span>
          <span>K</span>
          <span>I</span>
          <span>L</span>
          <span>L</span>
          <span>S</span>
        </Link>
      </div>
    </section>
  );
};
