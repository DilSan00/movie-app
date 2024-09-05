import SectionContainer from "../../containers/SectionContainer";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <SectionContainer>
      <div className={styles.heroSectionContainer}>
        <img src="/img/AbstractDesign.png" alt="AbstractDesign" />

        <div className={styles.HeroSectionInfo}>
          <h1 className={styles.heroSectionTitle}>
            The Best Streaming Experience
          </h1>
          <p className={styles.heroSectionDescription}>
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With <br />
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more.
            <br />
            You can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>
        </div>
        <button className={styles.HeroSectionBtn}>
          <img src="img/icons/start.png" alt="start" /> Start Watching Now
        </button>
      </div>
    </SectionContainer>
  );
};

export default HeroSection;
