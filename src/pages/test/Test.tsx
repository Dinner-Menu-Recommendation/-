import ProgressBar from "./components/progressBar/ProgressBar";
import RenderTests from "./components/renderTests/RenderTests";
import TestTitle from "./components/testTItle/TestTitle";
import styles from "./Test.module.scss";

function Test() {
  return (
    <div className={styles.container}>
      <ProgressBar />
      <TestTitle />
      <RenderTests />
    </div>
  );
}

export default Test;
