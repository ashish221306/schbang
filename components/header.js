import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { nav, profile } from "../public/data";
const Header = ({ styles }) => {
  const header = useRef();
  useEffect(() => {
    var prev = window.scrollY;
    const stickyheader = () => {
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
    if (
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      window.onscroll = stickyheader;
    }
    return () => {
      window.removeEventListener("scroll", stickyheader);
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
                  <li key={i} className={`position-relative ${styles.menu}`}>
                    <Link href={link.url}>
                      <a>{link.text}</a>
                    </Link>
                    <ul className={`list-unstyled mb-0 d-flex flex-column `}>
                      {link.menu.map((item, index) => {
                        return (
                          <li className="py-1 position-relative" key={index}>
                            <Link href={item.url}>
                              <a>{item.text}</a>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div
          className={`profile position-relative d-flex align-items-center ${styles.menu}`}
        >
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
          <div className={styles.profile}>
            <table>
              <tbody>
                {Object.keys(profile).map((d, i) => {
                  return (
                    <tr key={i}>
                      <td>{d}</td>
                      <td>:</td>
                      <td>{profile[d]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
