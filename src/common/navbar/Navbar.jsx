import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { Logo } from "../../assets";
import { TfiAlignLeft } from "react-icons/tfi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import MaskCursor from "../maskCursor/MaskCursor";

const Navbar = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const location = useLocation();

  const toggleModal = () => {
    setModal(!modal);
  };
  const menuList = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/service",
      name: "Services",
    },
  ];

  const activeStyle = {
    fontWeight: "bold",
    position: "relative",
  };

  const dotStyle = {
    width: "8px",
    height: "8px",
    backgroundColor: "#6ec38d",
    borderRadius: "50%",
    position: "absolute",
    bottom: "-10px", // Adjusted to ensure dot appears below the button
    left: "50%",
    transform: "translateX(-50%)",
  };
  return (
    <>
      <div className={styles.nav_container}>
        <div className={styles.nav_container_content}>
          <div className={styles.nav_container_content_left}>
            <img src={Logo} alt="logo" onClick={() => navigate("/")} />
          </div>
          <div className={styles.nav_container_content_middle}>
            {menuList.map((item) => {
              const isActive = location.pathname === item.path;
              const combinedStyles = isActive ? activeStyle : {};
              return (
                <>
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={styles.nav_container_content_middle_button}
                    style={combinedStyles}
                    onClick={item.onClick}
                  >
                    {item.name}
                    {isActive && <span style={dotStyle}></span>}
                  </NavLink>
                </>
              );
            })}
            <button className={styles.guoteBtn}>
              <span>Contact Me</span>
            </button>
          </div>
        </div>
      </div>

      {/* ****************************** Mobile NavBar ****************************** */}
      <div className={styles.mobileBar}>
        <div className={styles.mobileBar_content}>
          <div className={styles.mobileBar_content_left}>
            <img src={Logo} alt="logo" />
          </div>
          <div className={styles.mobileBar_content_middle}>
            <TfiAlignLeft
              onClick={toggleModal}
              style={{ color: "white", fontSize: "3rem" }}
            />
          </div>
        </div>
      </div>

      {/* ****************************** Mobile Responsive Container ****************************** */}
      {modal ? (
        <div className={styles.responsive_container} onClick={toggleModal}>
          <div className={styles.responsive_container_content}>
            <div className={styles.responsive_container_content_sidebar}>
              <div className={styles.responsive_container_content_sidebar_top}>
                <img src={Logo} alt="Logo" onClick={() => navigate("/")} />
              </div>
              <div
                className={styles.responsive_container_content_sidebar_bottom}
              >
                <button onClick={() => navigate("/")}>Home</button>
                <button onClick={() => navigate("/about")}>About</button>
                <button onClick={() => navigate("/service")}>Services</button>
                <button onClick={() => navigate("/guote")}>Contact Me</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
