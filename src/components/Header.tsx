import { useEffect, useRef, useState } from "react";
import ContactsIcon from "../icons/ContactsIcon";
import GoodsIcon from "../icons/GoodsIcon";
import HomeIcon from "../icons/HomeIcon";
import "../styles/Header.scss";
import "../styles/HeaderAdaptive.scss";

const Header = ({ openModal }: any) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isBurger, setIsBurger] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const setMenu = () => {
    if (menuRef.current) {
      if (isBurger) {
        menuRef.current.classList.remove("menu_opened");
        menuRef.current.classList.add("menu_closed");
      } else {
        menuRef.current.classList.remove("menu_closed");
        menuRef.current.classList.add("menu_opened");
      }
    }

    setIsBurger(!isBurger);
  };

  const handleResize = () => {
    const width = window.innerWidth;
    if (width > 1000) {
      setIsMobile(false);
    }
    if (width <= 1000) {
      setIsMobile(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToMain = () => {
    const aboutElement = document.getElementById("main") as HTMLElement;
    aboutElement.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProducts = () => {
    const aboutElement = document.getElementById("products") as HTMLElement;
    aboutElement.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToFooter = () => {
    const aboutElement = document.getElementById("contacts") as HTMLElement;
    aboutElement.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="Header">
      {isMobile ? (
        <div className="Header__body">
          <div className="Header__logo">
            <img src={process.env.PUBLIC_URL + "logo.svg"} alt="" style={{ width: "60px" }} />
          </div>
          <div className="Header__button">
            <button className="Order_button" onClick={openModal}>
              Замовити
            </button>
            <button className="MenuButton">
              <label className="hamburger">
                <input type="checkbox" onClick={setMenu} id="menuCheckbox" />
                <svg viewBox="0 0 32 32">
                  <path
                    className="line line-top-bottom"
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                  ></path>
                  <path className="line" d="M7 16 27 16"></path>
                </svg>
              </label>
            </button>
          </div>
        </div>
      ) : (
        <div className="Header__body">
          <div className="Header__logo">
            <img src={process.env.PUBLIC_URL + "logo.svg"} alt="" style={{ width: "120px" }} />
          </div>
          <div className="Header__nav">
            <button className="Header__nav_button" onClick={scrollToMain}>
              <HomeIcon></HomeIcon>
              <p>Головна</p>
            </button>
            <button className="Header__nav_button" onClick={scrollToProducts}>
              <GoodsIcon></GoodsIcon>
              <p>Товари</p>
            </button>
            <button className="Header__nav_button" onClick={scrollToFooter}>
              <ContactsIcon></ContactsIcon>
              <p>Контакти</p>
            </button>
          </div>
          <div className="Header__button">
            <button className="Order_button" onClick={openModal}>
              Замовити
            </button>
          </div>
        </div>
      )}
      <div className="Header__burger_nav menu_closed" ref={menuRef}>
        <div className="burger_nav_body">
          <div className="Header__nav">
            <button
              className="Header__nav_button"
              onClick={() => {
                scrollToMain();
                const check = document.getElementById("menuCheckbox") as HTMLInputElement;
                check.checked = false;
                setMenu();
              }}
            >
              <HomeIcon></HomeIcon>
              <p>Головна</p>
            </button>
            <button
              className="Header__nav_button"
              onClick={() => {
                scrollToProducts();
                const check = document.getElementById("menuCheckbox") as HTMLInputElement;
                check.checked = false;
                setMenu();
              }}
            >
              <GoodsIcon></GoodsIcon>
              <p>Товари</p>
            </button>
            <button
              className="Header__nav_button"
              onClick={() => {
                scrollToFooter();
                const check = document.getElementById("menuCheckbox") as HTMLInputElement;
                check.checked = false;
                setMenu();
              }}
            >
              <ContactsIcon></ContactsIcon>
              <p>Контакти</p>
            </button>
          </div>
          <div className="Header__nav_button_order">
            <button className="Order_nav_button" onClick={openModal}>
              Замовити
            </button>
          </div>
        </div>

        <div className="light-container">
          <div className="light x1"></div>
          <div className="light x2"></div>
          <div className="light x3"></div>
          <div className="light x4"></div>
          <div className="light x5"></div>
          <div className="light x6"></div>
          <div className="light x7"></div>
          <div className="light x8"></div>
          <div className="light x9"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
