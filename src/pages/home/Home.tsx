import Container from "../../components/container/Container";
import { useGetExample } from "../../services/example/queries";
import styles from "./Home.module.scss";

function Home() {
  const { data } = useGetExample();

  console.log(data);

  return (
    <Container>
      <div className={styles.main}>Home</div>
    </Container>
  );
}

export default Home;
