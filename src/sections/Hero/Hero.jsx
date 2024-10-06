import styles from "./HeroStyles.module.css";
import HeroImg from "../../assets/assets/hero-img.png";
import sun from "../../assets/assets/sun.svg";
import moon from "../../assets/assets/moon.svg";
import linkedinLight from "../../assets/assets/linkedin-light.svg";
import linkedinDark from "../../assets/assets/linkedin-dark.svg";
import youtubeDark from "../../assets/assets/icons8-youtube-48.svg";
import youtubeLight from "../../assets/assets/icons8-youtubedark.svg";
import githubLight from "../../assets/assets/github-light.svg";
import githubDark from "../../assets/assets/github-dark.svg";
import CV from "../../assets/assets/resume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const youtubeIcon = theme === "light" ? youtubeLight : youtubeDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={HeroImg}
          alt="Profile picture of Mithat Ural"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="ColorMode icon"
          onClick={toggleTheme}
        />
      </div>

      <div className={styles.info}>
        <h1>
          Mithat
          <br />
          Ural
        </h1>

        <h2>Frontend Developer</h2>
        <span>
          <a
            href="https://www.linkedin.com/in/mehmetmithatural/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
          <a href="http://www.youtube.com/@MehmetMithatUral" target="_blank">
            <img src={youtubeIcon} alt="Youtube Icon" />
          </a>
          <a href="https://github.com/mithatural" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
        </span>
        <p>
          Hi, I’m a Frontend Developer focused on building responsive,
          user-friendly web applications. I specialize in HTML, CSS, JavaScript,
          and React. Currently, I’m learning AWS to integrate cloud solutions
          into my projects. I’m always open to learning and applying new
          technologies. Let’s create something great together!
        </p>
        <a href={CV} target="_blank">
          <button className="hover" download>
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
