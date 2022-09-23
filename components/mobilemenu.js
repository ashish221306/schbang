import React, { useEffect, useRef } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import styles from "../styles/menu.module.css";
const Mobilemenu = () => {
  return (
    <nav className={styles.menu}>
      <button className={styles.active} title="Home">
        <AiOutlineHome size={25} color="#999" />
      </button>
      <button title="menu">
        <MdOutlineDashboardCustomize size={25} color="#999" />
      </button>
      <button title="setting">
        <FiSettings size={25} color="#999" />
      </button>
    </nav>
  );
};

export default Mobilemenu;
