import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <motion.div
      className="abt"
      id="about"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.2,
        y: { type: "spring", stiffness: "60" },
        opacity: { duration: 1 },
        ease: "easeIn",
        duration: 0.2,
      }}
    >
      <div className="about__hs">
        <div className="about__h1">01. About</div>
      </div>
      <div className="about__div">
        <div className="about__divs">
          <motion.div
            className="about__content"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: "60" },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            Hello, I'm Lasisi Ridwan Akolade, a front-end web developer from
            West Africa specializing in React.js. I’m passionate about creating
            seamless, responsive web experiences that are both functional and
            visually engaging. With a strong commitment to writing clean,
            efficient code, I constantly seek opportunities to refine my skills
            and stay ahead of emerging trends in web development. I thrive in
            collaborative environments, where teamwork and innovation drive
            success. I’m eager to bring my dedication, creativity, and technical
            skills to your team, contributing to impactful projects that deliver
            real value.
          </motion.div>
        </div>
        <div className="about__img">
          <motion.img
            src="../img/convert.png"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: "60" },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};
export default About;
