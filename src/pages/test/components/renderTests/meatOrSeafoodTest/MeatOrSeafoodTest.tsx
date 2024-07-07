import TestCard from "../TestCard/TestCard";
import styles from "./MeatOrSeafoodTest.module.scss";

interface MeatOrSeafoodTestProps {
  handleClickCard: (title: string) => void;
}

function MeatOrSeafoodTest({ handleClickCard }: MeatOrSeafoodTestProps) {
  return (
    <>
      <TestCard
        title="고기"
        description="단백질 보충!"
        handleClickCard={handleClickCard}
      >
        <div className={styles.first_background_img} />
      </TestCard>
      <TestCard
        title="해산물"
        description="신선한 해산물?"
        handleClickCard={handleClickCard}
      >
        <div className={styles.second_background_img} />
      </TestCard>
    </>
  );
}

export default MeatOrSeafoodTest;
