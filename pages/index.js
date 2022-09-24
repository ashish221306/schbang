import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import Mobilemenu from "../components/mobilemenu";
import { useEffect, useRef } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "aos/dist/aos";
import { BsArrowRight } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import Header from "../components/header";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  const banner = useRef();
  const metachanger = () => {
    const meta = document.head.querySelector('meta[name="theme-color"]');
    if (window.scrollY > banner.current?.clientHeight) {
      meta.setAttribute("content", "#fff5ec");
    } else {
      meta.setAttribute("content", "#781f1f");
    }
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    window.addEventListener("scroll", metachanger);
    return () => {
      window.removeEventListener("scroll", metachanger);
    };
  }, []);

  return (
    <div className={styles.body}>
      <Header styles={styles} />
      <section ref={banner} className={styles.banner}>
        <div className="container">
          <div className="row d-flex">
            <div
              className="col-md-6 col-12 "
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <span className={styles.fade}>FOOD</span>
              <h1 className="mb-4 heading">
                Discover restaurent<br></br> &amp;{" "}
                <span className={styles.strong}>Delicious</span> food
              </h1>
              <form
                onSubmit={(e) => e.preventDefault()}
                className={`${styles.search} d-flex`}
              >
                <input placeholder="search restaurant,food" type="text" />
                <button type="submit">GO</button>
              </form>
            </div>
            <div
              className="col-md-6 col-12"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <Carousel styles={styles} />
            </div>
          </div>
          <div className={styles.pin}>
            <Image
              objectFit="contain"
              src="/images/map.png"
              alt=""
              height={20}
              width={20}
            ></Image>
            <span className="d-inline-block mx-3">Hydrabad</span>
          </div>
        </div>
      </section>
      <section className={styles.seemore}>
        <div className="container">
          <div className="row mb-4 pb-4">
            <div className="col-md-4 mb-4  mb-md-0 col-12">
              <h2 className="smallheading heading-color position-relative d-flex">
                some top restaurant for <br></br>dining out or in!
              </h2>
            </div>
            <div className="col-md-8 col-12">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className={`row ${styles.nogutter}`}>
            <div className="col-md-5 col-12">
              <div
                className={`${styles.card} position-relative`}
                data-aos="fade-left"
              >
                <Image
                  src="/images/card1.png"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
                <div className={styles.content}>
                  <h3>Fire Water</h3>
                  <p>
                    we are all about we are all about to the fullest and all
                    content dining out or in!dining out or in!
                  </p>
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <span className="d-flex">
                      <FaMapMarkerAlt size={20} />
                      Hitech City
                    </span>
                    <Link href="">
                      <a className={styles.booknow}>
                        Book Now <BsArrowRight size={20} />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-12">
              <div
                className={`${styles.card} position-relative`}
                data-aos="fade-left"
              >
                <span className={styles.shape}>
                  <Image
                    src="/images/shape.png"
                    layout="fill"
                    objectFit="contain"
                    alt=""
                  />
                </span>
                <Image
                  src="/images/card1.png"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
                <div className={styles.content}>
                  <h3>Fire Water</h3>
                  <p>
                    we are all about we are all about to the fullest and all
                    content dining out or in!dining out or in!
                  </p>
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <span className="d-flex">
                      <FaMapMarkerAlt size={20} />
                      Hitech City
                    </span>
                    <Link href="">
                      <a className={styles.booknow}>
                        Book Now <BsArrowRight size={20} />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-12 d-flex justify-content-center">
              <Link href="">
                <span className={`${styles.seemorebox} mt-4 mt-md-0`}>
                  <span className={`${styles.more_arrow} d-flex`}>
                    <MdKeyboardArrowRight
                      className="position-relative"
                      size={20}
                      color="#fff"
                    />
                  </span>
                  <span>see more</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.services}>
        <div className="container">
          <div
            className="row mb-4 pb-4"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <div className="col-md-3 col-12">
              <h2 className="heading position-relative d-flex">
                Our<br className="d-none d-sm-block"></br> Services
              </h2>
            </div>
            <div className="col-md-9 col-12">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in
              </p>
            </div>
          </div>

          <div className="row">
            <div className={`col-lg-7 col-12 ${styles.items}`}>
              <div
                className="col-md-6 col-12"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              >
                <div className={`${styles.service} ${styles.bg}`}>
                  <Image
                    src="/images/meeting.png"
                    height={100}
                    width={100}
                    alt=""
                    objectFit="contain"
                  />
                  <span className={styles.arrow}>
                    <Image
                      src="/images/arrow.png"
                      height={70}
                      width={70}
                      alt=""
                      objectFit="contain"
                    />
                  </span>
                </div>
              </div>
              <div
                className="col-md-6 col-12"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              >
                <div className={styles.service}>
                  <h3>
                    advanced table <br></br>
                    <span className="position-relative">booking</span>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-12"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              >
                <div className={styles.service}>
                  <h3>
                    Food for Free<br></br>
                    <span className="position-relative">24/7</span>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </p>
                  <span className={`${styles.arrow} ${styles.reverse}`}>
                    <Image
                      src="/images/arrow.png"
                      height={70}
                      width={70}
                      alt=""
                      objectFit="contain"
                    />
                  </span>
                </div>
              </div>
              <div
                className="col-md-6 col-12"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              >
                <div className={`${styles.service} ${styles.bg}`}>
                  <Image
                    src="/images/dish.png"
                    height={100}
                    width={100}
                    alt=""
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <div
                className={`${styles.delivery} p-4  d-flex justify-center  flex-column`}
              >
                <Image
                  src="/images/meeting.png"
                  height={100}
                  width={100}
                  alt=""
                  objectFit="contain"
                />
                <h3 className="my-4">
                  free home delivery<br></br> at your door steps
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.download}>
        <div
          className="container"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <div className="row">
            <div className="col-md-7 col-12 d-flex flex-column justify-content-center">
              <div className="px-3">
                <h2 className="heading">
                  Download app<br></br> for Exciting Deals
                </h2>
                <p className="w-md-50">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
              <div
                className={`${styles.apps} d-flex flex-md-row  flex-column align-items-center`}
              >
                <a href="">
                  <Image
                    layout="fill"
                    src="/images/playstore.svg"
                    objectFit="contain"
                    priority
                    alt=""
                  />
                </a>
                <a href="">
                  <Image
                    layout="fill"
                    src="/images/appstore.svg"
                    objectFit="contain"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="col-md-5 col-12">
              <div className={styles.app}>
                <span className={styles.shape}>
                  <Image
                    src="/images/shape.svg"
                    height={200}
                    width={200}
                    layout="fixed"
                    objectFit="contain"
                    alt="download app"
                  />
                </span>
                <span className={styles.leave}>
                  <Image
                    src="/images/leaves.png"
                    height={400}
                    width={400}
                    layout="fixed"
                    objectFit="contain"
                    alt="download app"
                  />
                </span>
                <Image
                  src="/images/mobile.svg"
                  layout="fill"
                  objectFit="contain"
                  alt="download app"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer styles={styles} />
      <Mobilemenu />
    </div>
  );
}
