import Link from 'next/link';
import styles from './FooterContainer.module.css';
import FooterNavItem from '../../shared/components/FooterNavItem/FooterNavItem';


const FooterContainer = () => {
  return (
    <footer className={styles.footer}>
      {/* <div className="container"> */}

        <div className={styles.footerContainer}>

          <div className={styles.footerNav}> 
            <FooterNavItem
              title={"Home"}
              link1={'Categories'}
              link2={'Devices'}
              link3={'Pricing'}
              link4={'FAQ'}
            ></FooterNavItem>
           <FooterNavItem
              title={"Movies"}
              link1={'Gernes'}
              link2={'Trending'}
              link3={'New Release'}
              link4={'Popular'}
            ></FooterNavItem>
            <FooterNavItem
              title={"Shows"}
              link1={'Gernes'}
              link2={'Trending'}
              link3={'New Release'}
              link4={'Popular'}
            ></FooterNavItem>
            <FooterNavItem
              title={"Support"}
              link1={'Contact Us'}
            ></FooterNavItem>
            <FooterNavItem
              title={"Subscription"}
              link1={'Plans'}
              link2={'Features'}
            ></FooterNavItem>
            <FooterNavItem
              title={"Connect With Us"}
              img={true}
            ></FooterNavItem>
          </div>


          <div className={styles.footerEnd}>
            <p>@2023 streamvib, All Rights Reserved</p>
            <div>
              <p>Terms of Use</p>
              <div className={styles.line}></div>
              <p>Privacy Policy</p>
              <div className={styles.line}></div>
              <p>Cookie Policy</p>
            </div>
          </div>

        </div>

      {/* </div> */}
    </footer>
  );
}


export default FooterContainer