import React from "react";
import Nav from "../Navigation/Nav";
import Header from "../Header/Header";
import About from "../About/About";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";
import { Skills } from "../Skills/Skills";
import "./Home.css";


const Home = () => {
  const scrollToAbout = () => {
    const about = document.getElementById("about");
    if(about) {
      about.scrollIntoView({behavior: "smooth", block: "start" })
    }
  };

  const scrollToContact = () => {
    const contact = document.getElementById("contact")
    if(contact) {
      contact.scrollIntoView({behavior: "smooth", block: "start"})
    }
  };
  const scrollToProject = () => {
    const project = document.getElementById("project")
    if(project) {
      project.scrollIntoView({behavior: "smooth", block: "start"})
    }
  }
  return (
    <section className="app">
      {/* <main> */}
        <Nav scrollToAbout={scrollToAbout} scrollToProject={scrollToProject} scrollToContact={scrollToContact}/>
        <Header />
        {/* <About /> */}
         <Skills/>
        <Project />
        <Contact />

      {/* </main> */}
    </section>
  );
};

export default Home;
