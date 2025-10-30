import React from "react"
import './Skill.css'
export const Skills = () => {
  const technologies = [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript",
    "React.js",
    "Vercel/Netlify",
    "Framer Motion",
    "Firebase",
    "Git",
  ];
  const skills = {
    Frontend: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
    ],
    "Tools & Tech": [
      "Git & GitHub",
      "Firebase",
      "Framer Motion",
      "Vercel/Netlify",
    ],
    Practices: [
      "Clean Code",
      "Component Architecture",
      "REST APIs",
      "Performance Optimization",
    ],
  };
  return (
    <div className="skill_div">
    <div className="label_tech">
      <div className="about__hs">
        <div className="about__h1">01. Skills and Tech</div>
      </div>
      <div className="tech_stacks">
        <div className="technology">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill__category">
              <h3>{category}</h3>
              <div className="technology">
                {items.map((skill, index) => (
                  <div key={index} className="tech__name">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};
