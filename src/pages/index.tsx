import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import Typed from "typed.js";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import fr from "../content/Fr";
import en from "../content/En";
import "aos/dist/aos.css";

export default function Home() {
  const router = useRouter();
  const description = useRef<any>();
  const mediaLogo = useRef<any>();
  const languagesLogo = useRef<any>();
  const arrow = useRef<any>(null);
  const iconMedia = gsap.utils.selector(mediaLogo);
  const AllLanguagesLogo = gsap.utils.selector(languagesLogo);
  const { locale } = router;
  const language = locale === "fr" ? fr : en;

  useEffect(() => {
    const typed: object = new Typed(description.current, {
      strings: [
        language.indexPresentation[10],
        language.indexPresentation[11],
        language.indexPresentation[12],
      ],
      startDelay: 150,
      typeSpeed: 150,
      backDelay: 300,
      backSpeed: 150,
      smartBackspace: true,
      showCursor: false,
      loop: true,
    });

    gsap.to(iconMedia("a"), {
      x: -50,
      stagger: 0.33,
      repeatDelay: 1,
      delay: 0.4,
      duration: 1,
    });

    gsap.to(iconMedia("a"), {
      x: -25,
      stagger: 0.33,
      repeatDelay: 1,
      delay: 2,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(AllLanguagesLogo(".skill"), {
      y: -50,
      opacity: 1,
      stagger: 0.2,
      repeatDelay: 1,
      delay: 0.4,
      duration: 1,
    });

    gsap.to(arrow.current, {
      scale: 1.5,
      duration: 1.2,
    });


    gsap.to(arrow.current, {
      y: 20,
      delay: 0.4,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);
  return (
    <motion.div
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    exit={{ scaleX: 0 }}
    transition={{ duration: 0.3 }}>
      <Head>
        <meta name="description" content="Salut ! Je " />
        <title>{language.indexPresentation[8]} · Houdu Florian 😎</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://florianhoudu.fr/" />
      </Head>
      <ul className="access-nav">
        <li>
          <a href="#skills">{language.indexPresentation[5]}</a>
        </li>
        <li>
          <a href="#experience">{language.indexPresentation[6]}</a>
        </li>
        <li>
          <a href="#formation">{language.indexPresentation[7]}</a>
        </li>
      </ul>
      <header className="home-header">
        <Navigation />
        <div className="container-text-home">
          <h2>
            <span>{language.indexPresentation[0]}</span>
          </h2>
          <h1>
            <span>{language.indexPresentation[1]}</span>
          </h1>
          <p>
          {language.indexPresentation[0]} <span ref={description}></span>
          </p>
          <a
            href="/assets/files/CV - Houdu Florian.pdf"
            className="resume-button"
            target="BLANK"
          >
             {language.indexPresentation[13]}
          </a>
        </div>
        <div className="container-infos">
          <div className="domains">
            <span>
            {language.indexPresentation[9]}&nbsp;
            </span>
            <span>
            {language.indexPresentation[9]}&nbsp;
            </span>
          </div>
          <div className="technos">
            <span>
              - C++ - Python - HTML - SASS - PHP - JavaScript - SQL - React -
              GSAP - Arduino - CSS - Java - WordPress&nbsp;
            </span>
            <span>
              - C++ - Python - HTML - SASS - PHP - JavaScript - SQL - React -
              GSAP - Arduino - CSS - Java - WordPress&nbsp;
            </span>
          </div>
          <div className="tools">
            <span>
              - Visual Studio Code - Linux - SQL Server - IntelliJ - Packet
              Tracer - Visual Studio - MySQL - FileZilla&nbsp;
            </span>
            <span>
              - Visual Studio Code - Linux - SQL Server - IntelliJ - Packet
              Tracer - Visual Studio - MySQL - FileZilla&nbsp;
            </span>
          </div>
        </div>
        <div className="container-social-media" ref={mediaLogo}>
          <a href="https://github.com/FlorianHO" target="BLANK">
            <Image
              src="/assets/images/github-logo.svg"
              alt="Logo de GitHub"
              width={70}
              height={70}
            />
          </a>
          <a href="https://www.linkedin.com/in/florian-houdu" target="BLANK">
            <Image
              src="/assets/images/linkedin-logo.svg"
              alt="Logo de Linkedin"
              width={70}
              height={70}
            />
          </a>
          <a href="https://florianhoudu.fr" target="BLANK">
            <Image
              src="/assets/images/home-logo.svg"
              alt="Logo d'une maison"
              width={70}
              height={70}
            />
          </a>
        </div>  
      </header>
      <a href="#home-content">
        <div className="btn-down-home" ref={arrow}></div>
      </a>
      <main id="home-content">
        <section id="resume">
          <div id="skills">
            <h3>{language.indexPresentation[2]}</h3>
            <div className="container-card-skills" ref={languagesLogo}>
              <div className="skill">
                <Image
                  src="/assets/images/html5.svg"
                  alt="Logo du langage de balisage HTML5"
                  width={40}
                  height={40}
                />
                <span>HTML</span>
              </div>
              <div className="skill">
                <Image
                  src="/assets/images/css3.svg"
                  alt="Logo du langage CSS"
                  width={40}
                  height={40}
                />
                <span>CSS</span>
              </div>
              <div className="skill">
                <Image
                  src="/assets/images/javascript-original.svg"
                  alt="Logo du langage JavaScript"
                  width={40}
                  height={40}
                />
                <span>JavaScript</span>
              </div>
              <div className="skill">
                <Image
                  src="/assets/images/php.svg"
                  alt="Logo du langage PHP"
                  width={40}
                  height={40}
                />
                <span>PHP</span>
              </div>
              <div className="skill">
                <Image
                  src="/assets/images/react.svg"
                  alt="Logo de la bibliothèque React"
                  width={40}
                  height={40}
                />
                <span>React</span>
              </div>
              <div className="skill">
                <Image
                  src="/assets/images/nextjs.svg"
                  alt="Logo de la bibliothèque React"
                  width={40}
                  height={40}
                />
                <span>Next.js</span>
              </div>
              <div className="skill">
                <Image
                  src="/assets/images/sass.svg"
                  alt="Logo du langage de script préprocesseur SASS"
                  width={40}
                  height={40}
                />
                <span>SASS</span>
              </div>
              <div className="skill">
                <Image
                  src="/assets/images/mysql.svg"
                  alt="Logo de MySQL"
                  width={40}
                  height={40}
                />
                <span>MySQL</span>
              </div>
              <div className="skill">
                <Image
                  src="/assets/images/python.svg"
                  alt="Logo du langage Python"
                  width={40}
                  height={40}
                />
                <span>Python</span>
              </div>
              <div className="skill">
                <Image
                  src="/assets/images/c.svg"
                  alt="Logo du langage C"
                  width={40}
                  height={40}
                />
                <span>C++</span>
              </div>
            </div>
          </div>
          <div id="experience">
            <h3>{language.indexPresentation[3]}</h3>
            <div className="container-experience-timeline">
              <div className="experience-timeline">
                <div className="exp-1">
                  <div className="dot"></div>
                  <div className="exp-1-text" data-aos="fade-left"
                                              data-aos-easing="linear" data-aos-duration="600">
                    <div className="container-text">
                      <h4>Concepteur web</h4>
                      <h5>
                        <a href="https://cassiopea.ca/" target="BLANK">
                          Cassiopea 
                        </a> · Stage (Montréal, Québec - Canada)
                      </h5>
                    </div>
                    <div className="container-technos">
                      <div className="techno">
                        <span>React JS</span>
                      </div>
                      <div className="techno">
                        <span>Next.Js</span>
                      </div>
                      <div className="techno">
                        <span>SCSS</span>
                      </div>
                      <div className="techno">
                        <span>WordPress</span>
                      </div>
                      <div className="techno">
                        <span>Node JS</span>
                      </div>
                      <div className="techno">
                        <span>Elementor</span>
                      </div>
                      <div className="techno">
                        <span>SQL</span>
                      </div>
                      <div className="techno">
                        <span>React Native</span>
                      </div>
                      <div className="techno">
                        <span>Divi</span>
                      </div>
                      <div className="techno">
                        <span>PHP</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="exp-2">
                  <div className="dot"></div>
                    <div className="exp-2-text" data-aos="fade-right"
                                              data-aos-easing="linear" data-aos-duration="700">
                      <div className="container-text">
                        <h4>Assistant administratif</h4>
                        <h5>Fongecif Normandie · CDD (Bois-Guillaume - France)</h5>
                      </div>
                      <div className="container-technos">
                        <div className="techno">
                          <span>Cegep</span>
                        </div>
                        <div className="techno">
                          <span>Word</span>
                        </div>
                        <div className="techno">
                          <span>Excel</span>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="exp-3">
                  <div className="dot"></div>
                  <div className="exp-3-text" data-aos="fade-left"
                   data-aos-easing="linear" data-aos-duration="600">
                      <div className="container-text">
                        <h4>Stagiaire</h4>
                        <h5>Crêperie des Halles · Stage (Buchy - France)</h5>
                      </div>
                      <div className="container-technos">
                        <div className="techno">
                          <span>Activités physiques</span>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div id="formation">
            <h3>{language.indexPresentation[4]}</h3>
            <div className="container-experience-timeline">
              <div className="experience-timeline">
              <div className="form-1">
                  <div className="dot"></div>
                    <div className="form-1-text" data-aos="fade-left"
                     data-aos-easing="linear" data-aos-duration="700">
                      <div className="container-text">
                        <h4>Cycle préparatoire intégré en Informatique</h4>
                        <h5>CESI École dingénieurs · Saint-Étienne-du-Rouvray</h5>
                      </div>
                      <div className="container-technos">
                        <div className="techno">
                          <span>C++</span>
                        </div>
                        <div className="techno">
                          <span>HTML</span>
                        </div>
                        <div className="techno">
                          <span>CSS</span>
                        </div>
                        <div className="techno">
                          <span>SASS</span>
                        </div>
                        <div className="techno">
                          <span>JavaScript</span>
                        </div>
                        <div className="techno">
                          <span>PHP</span>
                        </div>
                        <div className="techno">
                          <span>Réseau</span>
                        </div>
                        <div className="techno">
                          <span>Serveur Apache</span>
                        </div>
                        <div className="techno">
                          <span>Arduino</span>
                        </div>
                        <div className="techno">
                          <span>Python</span>
                        </div>
                        <div className="techno">
                          <span>Électronique</span>
                        </div>
                        <div className="techno">
                          <span>SQL</span>
                        </div>
                        <div className="techno">
                          <span>Mathématiques</span>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="form-2">
                  <div className="dot"></div>
                    <div className="form-2-text" data-aos="fade-right"
                     data-aos-easing="linear" data-aos-duration="700">
                      <div className="container-text">
                      <h4>Baccalauréat Technologique Sciences et Technologies de lIndustrie et du Développement Durable</h4>
                        <h5>Lycée Delamare Deboutteville · Forges-Les-Eaux</h5>
                      </div>
                      <div className="container-technos">
                        <div className="techno">
                          <span>HTML</span>
                        </div>
                        <div className="techno">
                          <span>C++</span>
                        </div>
                        <div className="techno">
                          <span>Arduino</span>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="form-3">
                  <div className="dot"></div>
                    <div className="form-3-text" data-aos="fade-left"
                     data-aos-easing="linear" data-aos-duration="700">
                      <div className="container-text">
                        <h4>Baccalauréat Technologique Sciences et Technologies de lIndustrie et du Développement Durable</h4>
                        <h5>Collège Francis Yard · Buchy</h5>
                      </div>
                      <div className="container-technos">
                        <div className="techno">
                          <span>Cours de secondaire</span>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}
