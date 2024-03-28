import React from "react";

import ss from "./Skills.module.scss";

type SkillsProps = {};

export const Skills: React.FC<SkillsProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section
      className={ss.skills}
      data-scroll
      data-scroll-section
      data-scroll-offset="250"
    >
      <div className="container">
        <div className={ss.inner}>
          <div className={ss.info}>
            <ol className={ss.list}>
              <li className={ss.item}>
                <h6>TypeScript</h6>
                <p>Developer</p>
              </li>
              <li className={ss.item}>
                <h6>HTML5</h6>
                <p>Developer</p>
              </li>
              <li className={ss.item}>
                <h6>Tailwind CSS</h6>
                <p>
                frameworks
                </p>
              </li>
              <li className={ss.item}>
                <h6>three.js</h6>
                <p>3D Library</p>
              </li>
              <li className={ss.item}>
                <h6>Next.js 14 </h6>
                <p>Expert Next.js react frameworks </p>
              </li>
              <li className={ss.item}>
                <h6>node.js</h6>
                <p>backend developer</p>
              </li>
              <li className={ss.item}>
                <h6>UI & UX Design </h6>
                <p>Learning figma & adobe xd </p>
              </li>
            </ol>
            <div
              className={ss.year}
              data-scroll
              data-scroll-speed="2"
            >
              <hr />
              <p>
                <span>{currentYear}</span>
              </p>
            </div>
            <div className={ss.line}></div>
          </div>
          <h3 className={ss.title} data-scroll data-scroll-speed="-2">
            <span>H</span>
            <span>а</span>
            <span>r</span>
            <span>e</span>
            <span>e</span>
            <span>m</span>
          </h3>
        </div>
      </div>
    </section>
  );
};
