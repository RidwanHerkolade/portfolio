import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";
import "./Header.css";

import HeaderContent from "./HeaderContent";
const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="header__social">
          <div className="header__icon">
            <a href="https://github.com/RidwanHerkolade"><GitHubIcon className="header__icons"/></a>
            <a href='https://x.com/akolade469'> <TwitterIcon className="header__icons"/></a>
            <a href="https://www.linkedin.com/in/lasisi/"><LinkedInIcon className="header__icons"/></a>
            
          </div>
          <div className="line"></div>
        </div>
        <HeaderContent />
        <div className='email__display'>
                ridwanlasisi3@gmail.com
                <div className='email__line'></div>
            </div>
      </div>
    </header>
  );
};

export default Header;
