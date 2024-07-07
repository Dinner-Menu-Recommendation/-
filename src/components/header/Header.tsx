import { useNavigate, useParams } from "react-router-dom";
import styles from "./Header.module.scss";
import { ArrowLeft } from "../../assets/svg";
import PATH from "../../routes/path";

function Header() {
  const navigate = useNavigate();
  const { test_id } = useParams();

  return (
    <header className={styles.header}>
      <img
        onClick={() => navigate(PATH.HOME)}
        src={ArrowLeft}
        alt="뒤로가기"
        className={styles.back_button}
      />

      <div className={styles.question_numbers}>
        <p>{test_id}</p>
        <p>/</p>
        <p>10</p>
      </div>
    </header>
  );
}

export default Header;
