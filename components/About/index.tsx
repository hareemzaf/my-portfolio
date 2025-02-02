import Image from "next/image";
import React from "react";
import imgAbout1 from "../../public/assets/img/about__img1.jpg";
import imgAbout2 from "../../public/assets/img/about__img2.jpg";

import ss from "./About.module.scss";

type AboutProps = {};

export const About: React.FC<AboutProps> = () => {
  const refText = React.useRef<HTMLParagraphElement>(null);

  React.useEffect(() => {
    function splitLines(container: any) {
      var spans = container.children,
        top = 0,
        tmp = "";
      container.innerHTML = container.textContent.replace(/\S+/g, "<n>$&</n>");
      for (let i = 0; i < spans.length; i++) {
        var rect = spans[i].getBoundingClientRect().top;
        if (top < rect) tmp += "</span>" + "<span>";
        top = rect;
        tmp += spans[i].textContent + " ";
      }
      container.innerHTML = tmp += "</span>";
    }

    splitLines(refText.current);
  }, []);

  return (
    <section
      className={ss.about}
      data-scroll
      data-scroll-section
      data-scroll-offset="250"
    >
      <div className="container">
        <div className={ss.inner}>
          <div className={ss.info}>
            <div className={ss.title}>
              <div data-scroll data-scroll-speed="0.5">
                <span>A</span>
                <span>B</span>
                <span>O</span>
                <span>U</span>
                <span>T</span>
                </div>
              <div data-scroll data-scroll-speed="1">
                <span>M</span>
                <span>E</span>
              </div>
            </div>
            <p ref={refText} className={ss.text}>
            Purposeful, responsible, executive. I haveanalytical mind and logical thinking - in progressI think through every detail and prepare a convenient, in the rightplaces commented, code. Sometimes I create the website design myselfat the request of the client, based on his needs
            </p>
          </div>

          <div className={ss.images}>
            <div
              className={`${ss.img1} reveal-img`}
              data-scroll
              data-scroll-call="dynamicBackground"
              data-scroll-repeat
            >
              <div data-scroll data-scroll-speed="-2">
                <Image src={imgAbout1} alt="about__img1" />
              </div>
            </div>
            <div className={ss.pattern} data-scroll data-scroll-speed="-1">
              <div></div>
            </div>
            <div
              className={`${ss.img2} reveal-img`}
              data-scroll
              data-scroll-call="dynamicBackground"
              data-scroll-repeat
              data-scroll-speed="-1"
            >
              <div data-scroll data-scroll-speed="2">
                <Image src={imgAbout2} alt="about__img2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
