import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { nav } from "../public/data";
const Header = ({ styles }) => {
  const header = useRef();
  useEffect(() => {
    var prev = window.scrollY;
    window.onscroll = () => {
      if (prev > window.scrollY) {
        header.current.classList.add(`${styles.active}`);
        header.current.classList.remove(`${styles.hidden}`);
      } else {
        header.current.classList.remove(`${styles.active}`);
        header.current.classList.add(`${styles.hidden}`);
      }
      if (window.scrollY == 0) {
        header.current.classList.remove(`${styles.active}`);
      }
      prev = window.scrollY;
    };
  }, [styles]);

  return (
    <header ref={header} className={`${styles.nav} w-100 py-3 `}>
      <div className="container d-flex justify-content-between">
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
      </div>
    </header>
  );
};

export default Header;
