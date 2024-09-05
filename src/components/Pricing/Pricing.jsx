"use client";

import { useState } from "react";
import styles from "@/components/Pricing/Pricing.module.css";
import { priceMonth, priceYear } from "@/components/Pricing/Pricingdata";
import SectionContainer from "@/containers/SectionContainer";
import SectionTitle from "@/shared/components/SectionTitle/SectionTitle";
import PricingCard from "@/shared/components/PricingCard/PricingCard";
import Button from "@/shared/components/Button/Button";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handlePricing = () => {
    setIsMonthly(!isMonthly);
  };

  const activeButton = isMonthly ? styles.pricingInputActive : "";
  const inactiveButton = !isMonthly ? styles.pricingInputActive : "";

  return (
    <SectionContainer>
      <div className={styles.pricingContainer}>
        <SectionTitle
          title={"Choose the plan that's right for you"}
          description={`
            Join StreamVibe and select from our flexible subscription options 
            tailored to suit your viewing preferences. Get ready for non-stop entertainment!
          `}
        >
          <div className={styles.pricingTime}>
            <button
              className={`${styles.pricingInput} ${activeButton}`}
              onClick={handlePricing}
            >
              Monthly
            </button>
            <button
              className={`${styles.pricingInput} ${inactiveButton}`}
              onClick={handlePricing}
            >
              Yearly
            </button>
          </div>
        </SectionTitle>

        <div className={styles.pricingCards}>
          {isMonthly
            ? priceMonth.map((prices) => (
                <PricingCard
                  key={prices.title}
                  title={prices.title}
                  description={prices.description}
                  price={prices.price}
                  time={isMonthly}
                >
                  <Button darkMode={true}>Start Free Trial</Button>
                  <Button darkMode={false}>Choose Plan</Button>
                </PricingCard>
              ))
            : priceYear.map((prices) => (
                <PricingCard
                  key={prices.title}
                  title={prices.title}
                  description={prices.description}
                  price={prices.price}
                  time={isMonthly}
                >
                  <Button darkMode={true}>Start Free Trial</Button>
                  <Button darkMode={false}>Choose Plan</Button>
                </PricingCard>
              ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Pricing;
