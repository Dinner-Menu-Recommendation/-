import styles from "./Home.module.scss";

function Home() {
  console.log(import.meta.env.VITE_API_KEY);

  return <div className={styles.main}>Home</div>;
}

export default Home;
