import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import "./Contact.css";
import Form from "../Form/Form";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="contact__divs">
      <div className="contact__div" id="contact" >
        <div style={{ display: "flex" }}>
          <motion.div
            className="project2"
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
            03 Contact Me
          </motion.div>
        </div>
        <div
          className="contact__content"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: "60" },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          <p className="contact__para">
            I'm open to opportunities(jobs and internships) to work and improve
            my skills. Also, you can reach out to me on any of the mentioned
            media for collaboration.
          </p>
          <div className="contact__icons">
            <a href="mailto:ridwanlasisi3@gmail.com">
              <EmailIcon className="header__icons" />
            </a>
            <a href="https://x.com/akolade469">
              <TwitterIcon className="header__icons" />
            </a>
            <a href="https://www.linkedin.com/in/lasisi/">
              <LinkedInIcon className="header__icons" />
            </a>
            <a href="https://wa.link/c2o0e5">
              <WhatsAppIcon className="header__icons" />
            </a>
          </div>
          {/* <Form/> */}
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
