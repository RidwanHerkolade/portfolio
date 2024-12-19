import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import "./Nav.css";
const Nav = ({ scrollToAbout, scrollToContact, scrollToProject }) => {
  const [hide, setHide] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleMenu = () => {
    setHide((prevHide) => {
      if (!prevHide) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
      return !prevHide;
    });
  };
  // SCROLL EFFECT ON THE NAV BAR
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove("no-scroll");
    };
  }, []);
  return (
    <motion.nav
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className={`nav ${isScrolled ? "scrolled" : ""}`}
      transition={{
        delay: 0.2,
        y: { type: "spring", stiffness: "60" },
        opacity: { duration: 1 },
        ease: "easeIn",
        duration: 1,
      }}
    >
      <div className="nav__logo">
        <span>
          <ArrowBackIosIcon className="logo__icons" />
        </span>
        <div className="logo__name">ridwanAkolade</div>
        <span>
          <ArrowForwardIosIcon className="logo__icons" />
        </span>
      </div>
      <motion.ul
        className={`ul ${hide ? "ul__mobile" : "ul"}`}
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
          y: { type: "spring", stiffness: "60" },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
      >
        <li>
          <Link
            to="/"
            className="links"
            onClick={() => {
              scrollToAbout();
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="links"
            onClick={() => {
              scrollToProject();
            }}
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="links"
            onClick={() => {
              scrollToContact();
            }}
          >
            Contact
          </Link>
        </li>
        <div className="">
          <a
            className="btn"
            href="/img/ridwanAkolade_resume.pdf"
            target="_blank"
            download="ridwan_resume.pdf"
          >
            Resume
          </a>
        </div>
      </motion.ul>
      {hide ? (
        <div className="menu">
          <CloseIcon
            onClick={handleMenu}
            style={{
              fontSize: "2.5rem",
              color: "rgb(18, 24, 54)",
              fontWeight: "800",
            }}
            className="menu__icon"
          />
        </div>
      ) : (
        <div className="menu">
          <MenuIcon
            onClick={handleMenu}
            className="menu__icon"
            style={{
              fontSize: "2.5rem",
              color: "rgb(18, 24, 54)",
              fontWeight: "800",
            }}
          />
        </div>
      )}
    </motion.nav>
  );
};

export default Nav;
