import TestCard from "../TestCard/TestCard";
import styles from "./CountryFoodTest.module.scss";

interface CountryFoodTestProps {
  handleClickCard: (title: string) => void;
}

function CountryFoodTest({ handleClickCard }: CountryFoodTestProps) {
  return (
    <>
      <TestCard
        title="한식"
        description="한국인은 한식이지!🍲"
        handleClickCard={handleClickCard}
      >
        <div className={styles.first_background_img} />
      </TestCard>
      <TestCard
        title="중식"
        description="가끔은 중식이 땡겨🥟"
        handleClickCard={handleClickCard}
      >
        <div className={styles.second_background_img} />
      </TestCard>
      <TestCard
        title="양식"
        description="가끔은 양식이 땡겨🍝"
        handleClickCard={handleClickCard}
      >
        <div className={styles.third_background_img} />
      </TestCard>
      <TestCard
        title="일식"
        description="가끔은 일식이 땡겨🍜"
        handleClickCard={handleClickCard}
      >
        <div className={styles.fourth_background_img} />
      </TestCard>
    </>
  );
}

export default CountryFoodTest;
