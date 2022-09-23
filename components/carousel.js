import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import {
  Pagination,
  Autoplay,
  Parallax,
  Navigation,
  EffectCreative,
} from "swiper";
const Carousel = ({ styles }) => {
  return (
    <div
      className={`${styles.carousel} d-flex justify-content-center align-items-center`}
    >
      <div className={styles.navigation}>
        <span title="Prev" className={`${styles.prev} prev`}>
          <Image
            priority
            src="/images/navigation.png"
            objectFit="contain"
            alt=""
            height={30}
            width={70}
          />
        </span>

        <span title="Next" className={`${styles.next} next`}>
          <Image
            priority
            src="/images/next.png"
            objectFit="contain"
            alt=""
            height={30}
            width={70}
          />
        </span>
      </div>
      <span className={styles.topleave}>
        <Image
          objectFit="contain"
          priority
          src="/images/coriander.png"
          layout="fill"
          alt=""
        />
      </span>
      <span className={styles.shape}>
        <Image
          objectFit="contain"
          priority
          src="/images/shape.svg"
          height={250}
          width={300}
          alt=""
        />
        <Image
          objectFit="contain"
          priority
          src="/images/shape.svg"
          height={250}
          width={300}
          alt=""
        />
      </span>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        preloadImages
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        centeredSlides={true}
        parallax={true}
        modules={[Parallax, Autoplay, EffectCreative, Pagination, Navigation]}
      >
        {[...Array(10)].map((sl, i) => {
          return (
            <SwiperSlide key={i}>
              <Image
                objectFit="contain"
                src="/images/plate.png"
                height={450}
                width={450}
                alt=""
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
