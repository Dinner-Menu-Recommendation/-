import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { ArrowLeft } from "../../assets/svg";

function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <img
        onClick={() => navigate(-1)}
        src={ArrowLeft}
        alt="뒤로가기"
        className={styles.back_button}
      />

      <div className={styles.question_numbers}>
        <p>1</p>
        <p>/</p>
        <p>10</p>
      </div>
    </header>
  );
}

export default Header;
