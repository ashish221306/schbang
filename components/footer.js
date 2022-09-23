import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import { FaFacebookSquare, FaLinkedin, FaTumblrSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
const Footer = ({ styles }) => {
  return (
    <footer className={`${styles.footer} position-relative`}>
      <span className={styles.tree}>
        <Image
          objectFit="contain"
          objectPosition="left"
          src="/images/tree.png"
          alt=""
          layout="fill"
        />
      </span>
      <div className="container">
        <div className="d-flex  flex-column align-items-center">
          <h3 className="smallheading text-center">
            Get notified<br></br> about new amazing products
          </h3>
          <p className="text-center mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. It has been the industry&apos;s standard dummy text ever
            since.{" "}
          </p>
          <form className="d-flex bg-white overflow-hidden p-2 shadow align-content-between align-items-center">
            <input
              spellCheck="false"
              placeholder="E-mail"
              type="email"
              required
            />
            <button
              type="submit"
              className="d-flex justify-content-center align-items-center"
            >
              <BsArrowRightShort size={22} color="#fff" />
            </button>
          </form>
          <ul className="d-flex mt-4 flex-wrap list-unstyled justify-content-center align-items-center">
            <li>
              <Link href="">
                <a className="d-inline-block m-3">Product</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a className="d-inline-block m-3">Company</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a className="d-inline-block m-3">Learn more</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a className="d-inline-block m-3">Get in touch</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="sub-footer d-flex flex-column flex-lg-row align-items-center justify-content-end">
          <ul className="d-flex mr-3 list-unstyled mb-0 align-items-center">
            <li>
              <a href="" className="mx-3">
                <FaTumblrSquare size={22} />
              </a>
            </li>
            <li>
              <a href="" className="mx-3">
                <FaFacebookSquare size={22} />
              </a>
            </li>
            <li>
              <a href="" className="mx-3">
                <FaLinkedin size={22} />
              </a>
            </li>
            <li>
              <a href="" className="mx-3">
                <RiInstagramFill size={25} />
              </a>
            </li>
          </ul>
          <small className="my-4 d-sm-block">&copy; 2022 Indianpix</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
