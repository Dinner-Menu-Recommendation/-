import { ReactElement } from "react";
import styles from "./Ment.module.scss";

interface IProps {
  title: string;
  description: string;
}
function Ment({ title, description }: IProps) {
  return (
    <div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}

export default Ment;
