import { useGetExample } from "../../services/example/queries";
import styles from "./Home.module.scss";
import MainImg from "../../assets/img/main.gif";
import Ment from "./component/Ment";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

function Home() {
  const { data } = useGetExample();
  const navigate = useNavigate();

  const slideTitles: string[] = [
    "저녁 메뉴 추천해드립니다!",
    "오늘 뭐 먹지?",
    "한식? 중식? 양식? 일식?",
    "저메추가 고민해결",
  ];
  const slideDescriptions: string[] = [
    "115k 이상의 메뉴와\n 5,00개 이상의 레시피",
    "더 이상 고민하지 마세요!",
    "그날 그날 내 입맛과\n 취향에 맞게",
    "매일 다른 음식을 추천해드릴게요!",
  ];

  return (
    <div className={styles.main}>
      <img src={MainImg} alt="main_gif" className={styles.main_gif} />

      <Swiper
        pagination={{
          clickable: true,
          type: "bullets",
          // horizontalClass: styles.custom_pagination,
          // bulletClass: styles.custom_bullet,
          // bulletActiveClass: styles.custom_bullet_active,
        }}
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className={styles.swiper}
        autoplay={true}
      >
        {_.map(slideTitles, (element: string, index: number) => {
          return (
            <SwiperSlide>
              <Ment title={element} description={slideDescriptions[index]} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className={styles.btn} onClick={() => navigate("/test")}>
        Start!
      </div>
    </div>
  );
}

export default Home;
