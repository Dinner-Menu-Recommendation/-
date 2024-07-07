import TestCard from "../TestCard/TestCard";
import styles from "./PriceTest.module.scss";

interface PriceTestProps {
  handleClickCard: () => void;
}
function PriceTest({ handleClickCard }: PriceTestProps) {
  return (
    <>
      <TestCard
        title="가격 노상관"
        description="가격은 상관없어!"
        handleClickCard={handleClickCard}
      >
        <div className={styles.first_background_img} />
      </TestCard>
      <TestCard
        title="저렴한 한끼"
        description="오늘은 저렴하게 먹을까?"
        handleClickCard={handleClickCard}
      >
        <div className={styles.second_background_img} />
      </TestCard>
    </>
  );
}

export default PriceTest;
