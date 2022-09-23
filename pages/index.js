import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import { nav } from "../public/data";
import Mobilemenu from "../components/mobilemenu";
import { useEffect, useRef } from "react";
export default function Home() {
  const banner = useRef();
  const metachanger = () => {
    const meta = document.head.querySelector('meta[name="theme-color"]');
    if (window.scrollY > banner.current?.clientHeight) {
      meta.setAttribute("content", "#fff");
    } else {
      meta.setAttribute("content", "#781f1f");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", metachanger);
    return () => {
      window.removeEventListener("scroll", metachanger);
    };
  }, []);

  return (
    <div className={styles.body}>
      <header
        className={`${styles.nav} py-3 container d-flex justify-content-between`}
      >
        <div className="d-flex justify-content-between align-items-center">
          <a href="" title="eatiz">
            <Image
              objectFit="contain"
              priority
              objectPosition="left"
              src="/images/logo.png"
              height={30}
              width={130}
              alt=""
            ></Image>
          </a>
          <nav className="d-flex align-items-center">
            <ul className="d-flex mb-0 align-items-center">
              {nav.map((link, i) => {
                return (
                  <li key={i}>
                    <Link href={link.url}>{link.text}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="profile position-relative d-flex align-items-center">
          <span className={styles.profilepic}>
            <Image
              src="/images/profile.png"
              alt=""
              property=""
              className="rounded-circle"
              layout="fill"
              objectFit="cover"
            ></Image>
          </span>
          <span
            className={`${styles.dropdown} mx-2 cursor-pointer text-white d-flex`}
          >
            user
          </span>
        </div>
      </header>

      <section ref={banner} className={styles.banner}>
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-6 col-12">
              <span className={styles.fade}>FOOD</span>
              <h1 className="mb-4 heading">
                Discover restaurent<br></br> &amp; Delicious food
              </h1>
              <form
                onSubmit={(e) => e.preventDefault()}
                className={`${styles.search} d-flex`}
              >
                <input placeholder="search restaurant,food" type="text" />
                <button type="submit">GO</button>
              </form>
            </div>
            <div className="col-md-6 col-12">
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
      <section className={styles.services}>
        <div className="container">
          <div className="row mb-4 pb-4">
            <div className="col-md-3 col-12">
              <h2 className="heading position-relative d-flex">
                Our<br></br> Services
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
              <div className="col-md-6 col-12">
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
              <div className="col-md-6 col-12">
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
              <div className="col-md-6 col-12">
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
              <div className="col-md-6 col-12">
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
        <div className="container">
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
