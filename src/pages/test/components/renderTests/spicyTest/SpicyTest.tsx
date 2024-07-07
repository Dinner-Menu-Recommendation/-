import { NotSpicy, Spicy } from "../../../../../assets/svg";
import TestCard from "../TestCard/TestCard";
import styles from "./SpicyTest.module.scss";

interface SpicyTestProps {
  handleClickCard: () => void;
}

function SpicyTest({ handleClickCard }: SpicyTestProps) {
  return (
    <>
      <TestCard
        title="매운 음식"
        description="매운게 최고지!🔥"
        handleClickCard={handleClickCard}
      >
        <div className={styles.first_background_img}>
          <img src={Spicy} alt="spicy" />
        </div>
      </TestCard>
      <TestCard
        title="맵지 않은 음식"
        description="맵찔이는 웁니다😭"
        handleClickCard={handleClickCard}
      >
        <div className={styles.second_background_img}>
          <img src={NotSpicy} alt="not-spicy" />
        </div>
      </TestCard>
    </>
  );
}

export default SpicyTest;
