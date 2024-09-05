import SectionContainer from "../../containers/SectionContainer";
import SectionTitle from "@/shared/components/SectionTitle/SectionTitle";
import styles from "./Devices.module.css";

const Devices = () => {
  const devicesCards = [
    {
      title: "Smartphones",
      description: `StreamVibe is optimized for both Android and iOS smartphones. 
      Download our app from the Google Play Store or the Apple App Store`,
      img: "/img/devices/smartphone.png",
    },
    {
      title: "Tablet",
      description: `StreamVibe is optimized for both Android and iOS smartphones. 
      Download our app from the Google Play Store or the Apple App Store`,
      img: "/img/devices/smartphone.png",
    },
    {
      title: "Smart TV",
      description: `StreamVibe is optimized for both Android and iOS smartphones. 
      Download our app from the Google Play Store or the Apple App Store`,
      img: "/img/devices/smartphone.png",
    },
    {
      title: "Laptops",
      description: `StreamVibe is optimized for both Android and iOS smartphones. 
      Download our app from the Google Play Store or the Apple App Store`,
      img: "/img/devices/smartphone.png",
    },
    {
      title: "Gaming Consoles",
      description: `StreamVibe is optimized for both Android and iOS smartphones. 
      Download our app from the Google Play Store or the Apple App Store`,
      img: "/img/devices/smartphone.png",
    },
    {
      title: "VR Headsets ",
      description: `StreamVibe is optimized for both Android and iOS smartphones. 
      Download our app from the Google Play Store or the Apple App Store`,
      img: "/img/devices/smartphone.png",
    },
  ];

  return (
    <SectionContainer className={styles.devices}>
      <div className={styles.devicesContainer}>
        <SectionTitle
          className={styles.devicesHeader}
          title={"We Provide you streaming experience across various devices."}
          description={`
            With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. 
            Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss 
            a moment of entertainment.
          `}
        ></SectionTitle>

        <div className={styles.devicesCards}>
          {devicesCards.map((card) => {
            return (
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <img src={card.img} alt={card.title} />
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                </div>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Devices;
