import ProgressBar from "./components/progressBar/ProgressBar";
import TestTitle from "./components/testTItle/TestTitle";
import styles from "./Test.module.scss";

function Test() {
  return (
    <div className={styles.container}>
      <ProgressBar />
      <TestTitle />
    </div>
  );
}

export default Test;
