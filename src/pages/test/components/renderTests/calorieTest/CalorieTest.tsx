import TestCard from "../TestCard/TestCard";
import styles from "./CalorieTest.module.scss";

interface CalorieTestProps {
  handleClickCard: () => void;
}

function CalorieTest({ handleClickCard }: CalorieTestProps) {
  return (
    <>
      <TestCard
        title="칼로리 노상관"
        description="난 살쪄도 돼~!"
        handleClickCard={handleClickCard}
      >
        <div className={styles.first_background_img} />
      </TestCard>
      <TestCard
        title="칼로리 적은 음식"
        description="나 살빼야 돼.."
        handleClickCard={handleClickCard}
      >
        <div className={styles.second_background_img} />
      </TestCard>
    </>
  );
}

export default CalorieTest;
