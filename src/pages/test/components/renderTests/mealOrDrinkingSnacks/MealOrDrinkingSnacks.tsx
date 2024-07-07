import styles from "./MealOrDrinkingSnacks.module.scss";
import TestCard from "../TestCard/TestCard";

interface MealOrDrinkingSnacksProps {
  handleClickCard: () => void;
}

function MealOrDrinkingSnacks({ handleClickCard }: MealOrDrinkingSnacksProps) {
  return (
    <>
      <TestCard
        title="식사"
        description="든든한 한끼 식사!🍚"
        handleClickCard={handleClickCard}
      >
        <div className={styles.first_background_img} />
      </TestCard>
      <TestCard
        title="술 안주"
        description="오늘은 술 땡기는 날🍻"
        handleClickCard={handleClickCard}
      >
        <div className={styles.second_background_img} />
      </TestCard>
    </>
  );
}

export default MealOrDrinkingSnacks;
