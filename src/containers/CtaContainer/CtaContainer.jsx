import styles from './CtaContainer.module.css';
import SectionContainer from '../SectionContainer';
import Button from '../../shared/components/Button/Button';


const CtaContainer = () => {
  return (
    <SectionContainer>
      
      <div className={styles.CtaContainer}>
        <div>
          <h2 className={styles.CtaContainerTitle}>
          Start your free trial today!
          </h2>
          <p className={styles.CtaContainerDescription}>
            This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.
          </p>
        </div>

        <Button>Start a Free Trail</Button>

      </div>

    </SectionContainer>
  );
}


export default CtaContainer