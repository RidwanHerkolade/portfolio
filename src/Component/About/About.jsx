import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <motion.div
     className="abt"
      id="about"
      initial={{y: 50, opacity: 0}}
       whileInView={{y: 0, opacity: 1}}
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
            Hello, I'm Lasisi Ridwan Akolade, I am a front-end web developer
            from west Africa, with a focus on React.js .<br></br>I
            love creating smooth, responsive web experiences that are both
            functional and visually appealing. My goal is to write clean,
            efficient code while always looking for ways to improve.<br></br>{" "}
            I’m dedicated to my work and thrive in collaborative environments. I
            enjoy learning new coding techniques and working on personal
            projects to keep my skills sharp and stay up-to-date with the latest
            trends in web development. I’m excited about the chance to bring my
            enthusiasm and skills to your team, and I look forward to
            contributing to projects that make a real impact.
          </motion.div>
          <label htmlFor="label" className="label">
            Below are the list of technology have worked with
          </label>
          <div className="technology">
            <div className="tech__name">HTML</div>
            <div className="tech__name">CSS</div>
            <div className="tech__name">JAVASCRIPT</div>
            <div className="tech__name">REACT JS</div>
            <div className="tech__name">VERCEL/NETLIFY</div>
            <div className="tech__name">STYLED COMPONENT</div>
            <div className="tech__name">FRAMER MOTION</div>
            <div className="tech__name">FIREBASE</div>
            <div className="tech__name">GIT</div>
          </div>
        </div>
        <div
          className="about__img"
        >
          <motion.img src="../img/convert.png"  initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: "60" },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }} />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
