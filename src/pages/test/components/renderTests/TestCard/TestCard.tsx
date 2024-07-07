import { PropsWithChildren } from "react";
import styles from "./TestCard.module.scss";

interface TestCardProps {
  title: string;
  description: string;
  handleClickCard: () => void;
}

function TestCard({
  title,
  description,
  handleClickCard,
  children,
}: PropsWithChildren<TestCardProps>) {
  return (
    <div onClick={handleClickCard} className={styles.container}>
      <div className={styles.background_img}>{children}</div>
      <div className={styles.test_card_footer}>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TestCard;
