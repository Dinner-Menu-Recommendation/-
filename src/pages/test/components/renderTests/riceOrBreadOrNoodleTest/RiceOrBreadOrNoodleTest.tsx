import styles from "./RiceOrBreadOrNoodleTest.module.scss";
import TestCard from "../TestCard/TestCard";

interface RiceOrBreadOrNoodleTestProps {
  handleClickCard: (title: string) => void;
}

function RiceOrBreadOrNoodleTest({
  handleClickCard,
}: RiceOrBreadOrNoodleTestProps) {
  return (
    <>
      <TestCard
        title="밥"
        description="한국인은 밥심!"
        handleClickCard={handleClickCard}
      >
        <div className={styles.first_background_img} />
      </TestCard>
      <TestCard
        title="빵"
        description="간단하게 먹을까?"
        handleClickCard={handleClickCard}
      >
        <div className={styles.second_background_img} />
      </TestCard>
      <TestCard
        title="면"
        description="뜨끈한 국물과 호로록!"
        handleClickCard={handleClickCard}
      >
        <div className={styles.third_background_img} />
      </TestCard>
    </>
  );
}

export default RiceOrBreadOrNoodleTest;
