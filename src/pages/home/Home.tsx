import { useGetExample } from "../../services/example/queries";
import styles from "./Home.module.scss";

function Home() {
  const { data } = useGetExample();

  console.log(data);

  return <div className={styles.main}>Home</div>;
}

export default Home;
