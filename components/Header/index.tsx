import Link from "next/link";
import React from "react";

import ss from "./Header.module.scss";

type HeaderProps = {
  setOpenMenu: (openMenu: boolean) => void;
};

export const Header: React.FC<HeaderProps> = ({ setOpenMenu }) => {
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <header
      className={`${ss.header} ${isLoading ? ss.loaded : ""}`}
      data-scroll-section
      data-scroll-sticky
    >
      <div className="container">
        <nav className={ss.nav}>
          <Link href="/" className={ss.logo}>
            <span>h</span>
            <span>a</span>
            <span>r</span>
            <span>e</span>
            <span>e</span>
            <span>m</span>
            <span> </span>
            <span> </span>
            <span>z</span>
            <span>a</span>
            <span>f</span>
            <span>a</span>
            <span>r</span>
          </Link>

          <div onClick={() => setOpenMenu(true)} className={ss.menu__btn}>
            <p>Menu</p>
            <div className={`${ss.diamond} ${ss.diamond1}`}></div>
            <div className={`${ss.diamond} ${ss.diamond2}`}></div>
          </div>
        </nav>
      </div>
    </header>
  );
};
