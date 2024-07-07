import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { ArrowLeft } from "../../assets/svg";
import PATH from "../../routes/path";
import useTestCountStore from "../../stores/useTestCountStore";

function Header() {
  const navigate = useNavigate();
  const { testCount } = useTestCountStore();

  return (
    <header className={styles.header}>
      <img
        onClick={() => navigate(PATH.HOME)}
        src={ArrowLeft}
        alt="뒤로가기"
        className={styles.back_button}
      />

      <div className={styles.question_numbers}>
        <p>{testCount}</p>
        <p>/</p>
        <p>9</p>
      </div>
    </header>
  );
}

export default Header;
