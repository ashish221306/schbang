import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import { Pagination, Parallax, Navigation, EffectCreative } from "swiper";
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
          height={300}
          width={300}
          alt=""
        />
      </span>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 200,
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
          prevEl: `.prev`,
          nextEl: `.next`,
        }}
        centeredSlides={true}
        parallax={true}
        modules={[Parallax, EffectCreative, Pagination, Navigation]}
      >
        {[...Array(10)].map((sl, i) => {
          return (
            <SwiperSlide key={i}>
              <Image
                objectFit="contain"
                src="/images/plate.png"
                height={400}
                width={400}
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