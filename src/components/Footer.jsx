import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="container-arrow-up">
        <a href="#" className="arrow-up">
          <Image
            src="/assets/images/caret-up-solid.svg"
            alt="Flèche pointant vers le haut"
            width={40}
            height={40}
          />
        </a>
      </div>
      <footer>
        <div className="social-footer-icons">
          <a href="https://github.com/FlorianHO" target="BLANK">
            <Image
              src="/assets/images/github-logo.svg"
              alt="Logo de GitHub"
              width={40}
              height={40}
            />
          </a>
          <a href="https://www.linkedin.com/in/florian-houdu/" target="BLANK">
            <Image
              src="/assets/images/linkedin-logo.svg"
              alt="Logo de Linkedin"
              width={40}
              height={40}
            />
          </a>
        </div>
        <div className="content-copyrights">
          <a href="#">| © Florian HOUDU | 2022 - Tous droits réservés |</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
