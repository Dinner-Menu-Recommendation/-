import styles from "./TestTItle.module.scss";
import { UnderTestTitle } from "../../../../assets/svg";

function TestTitle() {
  return (
    <div className={styles.container}>
      <h1 className={styles.test_title}>지금 어떤게 땡기시나요?</h1>

      <img
        src={UnderTestTitle}
        alt="under_title"
        className={styles.under_title}
      />
    </div>
  );
}

export default TestTitle;
