import { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import apiInstance from "../../api/apiInstance";

function Home() {
  const [data, setData] = useState();

  const fetch = async () => {
    try {
      const res = await apiInstance.get("/recipes/complexSearch");
      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  console.log(data);

  return <div className={styles.main}>Home</div>;
}

export default Home;
