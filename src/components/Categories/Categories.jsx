import SectionContainer from "../../containers/SectionContainer";
import ButtonSlider from "@/shared/components/ButtonSlider/ButtonSlider";
import Card from "@/shared/components/Card/Card";
import SectionTitle from "@/shared/components/SectionTitle/SectionTitle";
import styles from "./Categories.module.css";

const Categories = () => {
  const categoriesData = [
    { title: "Actionz" },
    { title: "Adventure" },
    { title: "Comedy" },
    { title: "Drama" },
    { title: "Horror" },
  ];

  return (
    <SectionContainer className={styles.categories}>
      <div className={styles.categoriesContainer}>
        <SectionTitle
          title={"Explore our wide variety of categories"}
          description={`
            Whether you're looking for a comedy to make you laugh,
            a drama to make you think, or a documentary to learn something new
          `}
        >
          <ButtonSlider />
        </SectionTitle>

        <div className={styles.categoriesCards}>
          {categoriesData.map((item) => {
            return <Card> {item.title} </Card>;
          })}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Categories;
