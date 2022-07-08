import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import fr from "../content/Fr.jsx";
import en from "../content/En.jsx";

const Navigation = () => {
  const router = useRouter();
  let lastScrollTop = 0;
  let ColorSite = useRef();
  let Links = useRef();
  let HamburgerLogo = useRef();
  let NavList = useRef();
  let NavLinks = gsap.utils.selector(Links);

  const { locale } = router;
  const language = locale === "fr" ? fr : en;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  const [Navbar, setNavbar] = useState(0);
  const [scrollTopBar, setscrollTopBar] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const Scrolled = (winScroll / height) * 100;
    setscrollTopBar(Scrolled);
  };

  let ScrollNav = () => {
    const { scrollTop } = document.documentElement;
    if (window.scrollY === 0) {
      setNavbar(0);
    } else if (scrollTop > lastScrollTop) {
      setNavbar(1);
    } else if (!(scrollTop > lastScrollTop)) {
      setNavbar(2);
    }
    lastScrollTop = scrollTop;
  };

  const ActivatedHamburger = () => {
    HamburgerLogo.current.classList.toggle("active");
    NavList.current.classList.toggle("opennav");
  }

  let ChangeColor = () => {
    document.body.classList.toggle("light");
  };

  useEffect(() => {
    gsap.to(NavLinks("li"), {
      opacity: 1,
      stagger: 0.33,
      repeatDelay: 1,
      delay: 0.1,
      duration: 0.2,
    });

    window.addEventListener("scroll", ScrollNav);
    window.addEventListener("scroll", onScroll);
    ColorSite.current.addEventListener("click", ChangeColor);
    return () => {
      window.removeEventListener("scroll", ScrollNav);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className="progressBar" style={{ width: `${scrollTopBar}%` }}></div>
      <nav
        className={
          Navbar == 0
            ? "scrollOrigin"
            : Navbar == 1
            ? "scrollDown"
            : Navbar == 2
            ? "scrollTop"
            : ""
        }
        ref={Links}
      >
        <div className="color-button" ref={ColorSite}>
          <i className="btn-moon"></i>
        </div>
        <div className="hamburger-logo" onClick={ActivatedHamburger} ref={HamburgerLogo}> 
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
        <ul ref={NavList}>
          <li>
            <Link href="/">
              <a className={router.pathname === "/" ? "link-active" : ""}>
                {language.links[0]}
              </a>
            </Link>
          </li>

          <li>
            <Link href="/portfolio">
              <a
                className={
                  router.pathname === "/portfolio" ? "link-active" : ""
                }
              >
               {language.links[1]}
              </a>
            </Link>
          </li>

          <li>
            <Link href="/apis">
              <a className={router.pathname === "/apis" ? "link-active" : ""}>
              {language.links[2]}
              </a>
            </Link>
          </li>

          <li>
            <Link href="/terre">
              <a
                className={router.pathname === "/terre" ? "link-active" : ""}
              >
               {language.links[3]}
              </a>
            </Link>
          </li>

          <li>
            <Link href="/contact">
              <a
                className={router.pathname === "/contact" ? "link-active" : ""}
              >
               {language.links[4]}
              </a>
            </Link>
          </li>
          <li>
            <div className="language-select">
              <select
                name="language"
                id="language"
                onChange={changeLanguage}
                defaultValue={locale}
              >
                <option value="fr">FR</option>
                <option value="en">EN</option>
              </select>
              <Image
              src="/assets/images/angle-down-solid.svg"
              alt="Logo de Linkedin"
              width={25}
              height={25}
            />
            </div>
          </li>
        </ul>
        <div className="nav-social-links">
          <a href="https://www.linkedin.com/in/florian-houdu/" target="BLANK">
            <Image
              src="/assets/images/linkedin-logo.svg"
              alt="Logo de Linkedin"
              width={30}
              height={30}
            />
          </a>
          <a href="https://github.com/FlorianHO" target="BLANK">
            <Image
              src="/assets/images/github-logo.svg"
              alt="Logo de GitHub"
              width={30}
              height={30}
            />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
