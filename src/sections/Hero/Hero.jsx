import styles from './HeroStyles.module.css'
import HeroImg from '../../assets/assets/hero-img.png'
import themeIcon from '../../assets/assets/sun.svg'
import linkedinIcon from '../../assets/assets/linkedin-light.svg'
import youtubeIcon from '../../assets/assets/icons8-youtube-48.svg'
import githubIcon from '../../assets/assets/github-light.svg'

function Hero() {
  return <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
      <img className={styles.hero} src={HeroImg} alt="Profile picture of Mithat Ural" />
      <img className={styles.colorMode} src={themeIcon} alt="ColorMode icon" />
    </div>

    <div className={styles.info}>
      <h1>
        Mithat 
        <br /> 
        Ural
      </h1>

      <h2>Frontend Developer</h2>
      <span>
        <a href="https://www.linkedin.com/in/mehmetmithatural/" target='_blank'>
            <img src={linkedinIcon} alt="Linkedin Icon" />
        </a>
        <a href="http://www.youtube.com/@MehmetMithatUral" target='_blank'>
            <img src={youtubeIcon} alt="Youtube Icon" />
        </a>
        <a href="https://github.com/mithatural" target='_blank'>
            <img src={githubIcon} alt="Github Icon" />
        </a>
      </span>
      <p>
      Hi, I’m a Frontend Developer focused on building responsive, user-friendly web applications. I specialize in HTML, CSS, JavaScript, and React. Currently, I’m learning AWS to integrate cloud solutions into my projects. I’m always open to learning and applying new technologies. Let’s create something great together!
      </p>
    </div>
  </section>;
}

export default Hero;
