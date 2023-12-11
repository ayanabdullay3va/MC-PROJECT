import React, { useEffect, useState } from "react";
import "./../../style/sass/detail.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
function Detail() {
  const { id } = useParams();
  const [meals, setMeal] = useState([]);
  useEffect(() => {
    axios(`http://localhost:3000/meals/${id}`).then((res) => {
      setMeal(res.data);
    });
  }, [id]);

  return (
    <section className="burgerdetail">
      <div className="container">
        <div className="burgerdiv">
          <div className="leftburger">
            <img src={meals.image} alt="" />
          </div>
          <div className="rightburger">
            <h1>{meals.name}</h1>
            <div className="text">
              <p>{meals.description} </p>
            </div>
          </div>
        </div>
        <section className="burgermedium">
          <div className="container2">
            <br />
            <h1>Əlaqədar məhsullar</h1>

            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              navigation
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                "@1.50": {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                {" "}
                <img
                  src="https://mcdonalds.az/images/bf93706e65a4eb7a0bec356f94053f4e.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://mcdonalds.az/images/decdafe4e7aa96fbb17420635b19eec3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://mcdonalds.az/images/bf93706e65a4eb7a0bec356f94053f4e.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://mcdonalds.az/images/d53a391310a492a79740d611bbfd53b9.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </div>
        </section>
        {/* <button >Salam</button> */}
      </div>
    </section>
  );
}

export default Detail;
