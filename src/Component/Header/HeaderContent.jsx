import React from "react";
import { motion } from "framer-motion";

const HeaderContent = () => {
  return (
    <motion.main
      className="main"
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.2,
        y: { type: "spring", stiffness: "60" },
        opacity: { duration: 1 },
        ease: "easeIn",
        duration: 1,
      }}
    >
      <motion.div className="main__div"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        delay: 0.2,
        x: { type: "spring", stiffness: "60" },
        opacity: { duration: 1 },
        ease: "easeIn",
        duration: 1,
      }}>
        <text>Hi 👋,my name is</text>
        <h1 className="header__name">Ridwan Akolade.</h1>
        <h3 className="h3">Crafting seamless digital experience.</h3>
        <p className="header__para">
          I’m a dedicated <small className="span">front-end developer</small>{" "}
           driven by a passion for crafting visually stunning and user-centric digital experiences. With expertise in building sleek, responsive interfaces, I merge creativity with functionality to bring ideas to life. Let’s collaborate to turn your vision into a seamless and impactful reality
        </p>
        <div className="yellow">
          {" "}
          <a className="resume" href="/img/ridwanAkolade_resume.pdf" target="_blank" download="ridwan_resume.pdf">Resume</a>
        </div>
      </motion.div>
    </motion.main>
  );
};
export default HeaderContent;
