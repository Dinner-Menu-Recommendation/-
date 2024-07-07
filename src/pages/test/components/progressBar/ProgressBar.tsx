import styles from "./ProgressBar.module.scss";
import useTestCountStore from "../../../../stores/useTestCountStore";

function ProgressBar() {
  const { testCount } = useTestCountStore();
  const progressPercentage = (testCount / 9) * 100;

  return (
    <div className={styles.container}>
      <div
        style={{
          width: `${progressPercentage}%`,
          transition: "width 0.3s ease",
          borderRight: testCount === 9 ? "0px" : "",
          borderRadius: testCount === 9 ? "40px" : "",
        }}
        className={styles.inner}
      />
    </div>
  );
}

export default ProgressBar;
