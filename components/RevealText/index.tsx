import React from "react";

import ss from "./RevealText.module.scss";

type RevealTextProps = {};

export const RevealText: React.FC<RevealTextProps> = () => {
  return (
    <section className={ss.reveal} data-scroll-section>
      <div className={ss.inner}>
        <h2
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-17"
          data-scroll-delay="0.05"
        >
          <span>Hareem Zafar Hareem Zafar Hareem Zafar Hareem Zafar</span>
        </h2>
        <div className={ss.list}>
          <ul>
            <li>Full Stack Developer</li>
            <li>Full Stack Developer</li>
            <li>Full Stack Developer</li>
            <li>Full Stack Developer</li>
          </ul>
          <ul>
            <li>Full Stack Developer</li>
            <li>Full Stack Developer</li>
            <li>Full Stack Developer</li>
            <li>Full Stack Developer</li>
          </ul>
        </div>
        <h2
          className={ss.title}
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="17"
          data-scroll-delay="0.05"
        >
          <span>Hareem Zafar Hareem Zafar Hareem Zafar Hareem Zafar</span>
        </h2>
      </div>
    </section>
  );
};
