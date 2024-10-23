import React, { useRef } from "react";
import "../styles/Montage.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const Montage = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <section className='montage'>
        <div className="montage__container">
            <h1>Монтаж систем резервного живлення під ключ в місті Київ та область, а також м. Дніпро</h1>
            <h4>Монтаж від 190$ під ключ</h4>
            <div className="montage__list">
                <Swiper
                    autoHeight={true}
                    freeMode={true}
                    grabCursor={true}
                    resistanceRatio={0}
                    autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                    }}
                    breakpoints={{
                    370: {
                        slidesPerView: 1,
                    },
                    600: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                    1440: {
                        slidesPerView: 4,
                    },
                    }}
                    loop={true}
                    modules={[Autoplay, Navigation]}
                    className="montage__swiper"
                    navigation={{
                        nextEl: navigationNextRef.current,
                        prevEl: navigationPrevRef.current,
                    }}
                    onBeforeInit={(swiper: any) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    }}
                >
                    {montageData.map((el, index) => (
                        <SwiperSlide className="montage__slide" key={index}>
                            <img src={process.env.PUBLIC_URL + el.img} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <p>Чому вигідно замовити в нашій компанії?:</p>
            <ul>
                <li>
                    Встановлення та обслуговування обладнання 
                </li>
                <li>
                    Кваліфіковані фахівці з монтажу 
                </li>
                <li>
                    Індивідуально підберемо систему під ваші потреби
                </li>
                <li>
                    Офіційно, згідно договору, розрахунок безготівковий з ТОВ, ОСББ та інші організації 
                </li>
                <li>
                    Гарантія на обладнання 
                </li>
                <li>
                    Гарантія на роботу 
                </li>
                <li>
                    Після продажний сервіс та обслуговування
                </li>
            </ul>
        </div>
    </section>
  );
};

export default Montage;

const montageData = [
    {
      id: 0,
      img: "/montage/1.webp",
    },
    {
      id: 1,
      img: "/montage/2.webp",
    },
    {
      id: 2,
      img: "/montage/3.webp",
    },
    {
      id: 3,
      img: "/montage/4.webp",
    },
    {
      id: 4,
      img: "/montage/5.webp",
    },
    {
      id: 5,
      img: "/montage/6.webp",
    },
    {
      id: 6,
      img: "/montage/7.webp",
    },
    {
      id: 7,
      img: "/montage/8.webp",
    },
    {
      id: 8,
      img: "/montage/9.webp",
    },
    {
      id: 4,
      img: "/montage/10.webp",
    },
    {
      id: 9,
      img: "/montage/11.webp",
    },
    {
      id: 10,
      img: "/montage/12.webp",
    },
    {
      id: 11,
      img: "/montage/13.webp",
    },
    {
      id: 12,
      img: "/montage/14.webp",
    },
    {
      id: 13,
      img: "/montage/15.webp",
    },
    {
      id: 14,
      img: "/montage/16.webp",
    },
    {
      id: 15,
      img: "/montage/17.webp",
    },
  ];