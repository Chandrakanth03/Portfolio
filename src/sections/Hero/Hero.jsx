import styles from "./Hero.module.css";
import heroImg from '../../assets/profile.png';
import sunIcon from '../../assets/sun.svg'; 
import moonIcon from '../../assets/moon.svg';
// import twitterLight from '../../assets/twitter-light.svg';
// import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedLight from '../../assets/linkedin-light.svg';
import linkedDark from '../../assets/linkedin-dark.svg';
import cv from '../../assets/cv.pdf';
import { useTheme } from "../../common/ThemeContext";

function Hero() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sunIcon : moonIcon;
    // const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark; // Fixed typo here
    const linkedIcon = theme === 'light' ? linkedLight : linkedDark;

    return (
        <section id="hero" className={styles.container}>
            <div> 
                <img className={styles.Hero} src={heroImg} alt="profile image" />
                <img 
                    className={styles.colorMode} 
                    src={themeIcon} 
                    alt="color mode icon" 
                    onClick={toggleTheme} 
                />
            </div>
            <div className={styles.info}>
                <h1>
                    CHANDRAKANTH
                    <br />
                    REDDY
                </h1>
                <h2>FullStack Developer</h2>
                <span>
                    {/* <a href="---link---" target="_blank" rel="noopener noreferrer">
                        <img src={twitterIcon} alt="twitter" /> 
                    </a> */}
                    <a href="https://github.com/Chandrakanth03" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="github" /> 
                    </a>
                    <a href="https://www.linkedin.com/in/chandrakanth26/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedIcon} alt="linkedin" /> 
                    </a>
                </span>
                <p>
                    With a passion for developing modern React web apps for commercial businesses.
                </p>
                <a href={cv} download>
                    <button className={styles.hover}>Resume</button>
                </a>
            </div>
        </section>
    );
}

export default Hero;
