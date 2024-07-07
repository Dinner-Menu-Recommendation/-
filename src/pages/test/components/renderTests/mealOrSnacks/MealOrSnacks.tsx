import styles from "./MealOrSnacks.module.scss";
import TestCard from "../TestCard/TestCard";

interface MealOrDrinkingSnacksProps {
  handleClickCard: (title: string) => void;
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
        title="간식"
        description="난 간식이 좋아~!"
        handleClickCard={handleClickCard}
      >
        <div className={styles.second_background_img} />
      </TestCard>
    </>
  );
}

export default MealOrDrinkingSnacks;
