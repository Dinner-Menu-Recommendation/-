import TestCard from "../TestCard/TestCard";
import styles from "./SoupTest.module.scss";

interface SoupTestProps {
  handleClickCard: () => void;
}

function SoupTest({ handleClickCard }: SoupTestProps) {
  return (
    <>
      <TestCard
        title="국물 있는 음식"
        description="역시 국물이 있어야 돼~"
        handleClickCard={handleClickCard}
      >
        <div className={styles.first_background_img} />
      </TestCard>
      <TestCard
        title="국물 없는 음식"
        description="국물도 없어!"
        handleClickCard={handleClickCard}
      >
        <div className={styles.second_background_img} />
      </TestCard>
    </>
  );
}

export default SoupTest;
