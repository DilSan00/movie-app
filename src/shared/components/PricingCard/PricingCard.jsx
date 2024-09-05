'use client'

import styles from './PricingCard.module.css';


const PricingCard = ({ children, title, description, price, time }) => {
  const countTime = time ? '/month' : '/year';
  
  return (
    <div className={styles.pricingCard}>

      <div className={styles.pricingCardContainer}>
        <div style={{ display: 'grid', gap: '12px'}}>
          <h2 className={styles.pricingCardTitle}>{ title }</h2>
          <p className={styles.pricingCardDescription}>{ description }</p>
        </div>
        
        <p className={styles.pricingCardDescription}>
          <span>{`$${price} `}</span> 
          { countTime }
        </p>

        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          { children }
        </div>
      </div>

    </div>
  );
}


export default PricingCard