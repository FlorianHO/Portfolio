import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

const Navigation = () => {
  const router = useRouter();
  let lastScrollTop = 0;
  let ColorSite = useRef();
  let Links = useRef();
  let NavLinks = gsap.utils.selector(Links);

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
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname === "/" ? "link-active" : ""}>
                Accueil
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
                Portfolio
              </a>
            </Link>
          </li>

          <li>
            <Link href="/apis">
              <a className={router.pathname === "/apis" ? "link-active" : ""}>
                Api
              </a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a
                className={router.pathname === "/apis" ? "link-active" : ""}
              ></a>
            </Link>
          </li>

          <li>
            <Link href="/contact">
              <a
                className={router.pathname === "/contact" ? "link-active" : ""}
              >
                Contact
              </a>
            </Link>
          </li>
          <li>
            <Link href="/en">
              <a className="english-btn">EN</a>
            </Link>
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
