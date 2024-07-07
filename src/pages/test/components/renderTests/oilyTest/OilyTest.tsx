import TestCard from "../TestCard/TestCard";
import styles from "./OilyTest.module.scss";

interface OilyTestProps {
  handleClickCard: () => void;
}

function OilyTest({ handleClickCard }: OilyTestProps) {
  return (
    <>
      <TestCard
        title="느끼한 음식"
        description="기름칠좀 해볼까~"
        handleClickCard={handleClickCard}
      >
        <div className={styles.first_background_img} />
      </TestCard>
      <TestCard
        title="담백한 음식"
        description="느끼한건 싫어ㅠㅠ"
        handleClickCard={handleClickCard}
      >
        <div className={styles.second_background_img} />
      </TestCard>
    </>
  );
}

export default OilyTest;
