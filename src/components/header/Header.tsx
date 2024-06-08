import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "../../assets/svg";
import styles from "./Header.module.scss";

function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <img
        onClick={() => navigate(-1)}
        src={ChevronLeft}
        alt="뒤로가기"
        className={styles.back_button}
      />
    </header>
  );
}

export default Header;
