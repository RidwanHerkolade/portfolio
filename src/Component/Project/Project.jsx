// import React from "react";
// import "./Project.css";
// import { ProjectData } from "./ProjectData";
// import LaunchIcon from "@mui/icons-material/Launch";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import { motion } from "framer-motion";
// const Project = () => {
//   return (
//     <div className="project__divs"> 
//       <div className="project__div" id="project">
//         <div style={{ display: "flex" }} >
//           <motion.div
//             className="project2"
//             initial={{ x: -100, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{
//               delay: 0.2,
//               x: { type: "spring", stiffness: "60" },
//               opacity: { duration: 1 },
//               ease: "easeIn",
//               duration: 1,
//             }}
//           >
//             02 My Projects
//           </motion.div>
//         </div>
//         <div className="project__grid">
//           {ProjectData.map((data) => {
//             return (
//               <div className="project__grids" key={data.id}>
//                 <motion.div
//                   className="project__content"
//                   initial={{ x: -100, opacity: 0 }}
//                   whileInView={{ x: 0, opacity: 1 }}
//                   transition={{
//                     delay: 0.2,
//                     x: { type: "spring", stiffness: "60" },
//                     opacity: { duration: 1 },
//                     ease: "easeIn",
//                     duration: 1,
//                   }}
//                 >
//                   {/* <small>Featured project</small> */}
//                   <a href="/" className="a">
//                     {data.title}
//                   </a>
//                   <p className="project__para">{data.description}</p>
//                   <div className="tools">
//                     <div className="toolsid">{data.tools.tools1}</div>
//                     <div className="toolsid">{data.tools.tools2}</div>
//                     <div className="toolsid">{data.tools.tools4}</div>
//                     <div className="toolsid">{data.tools.tools3}</div>
//                   </div>
//                   <div className="project__icon">
//                     <a href={data.gitPath}>
//                       <GitHubIcon className="header__icons" />
//                     </a>
//                     <a href={data.path}>
//                       <LaunchIcon className="header__icons" />
//                     </a>
//                   </div>
//                 </motion.div>
//                 <motion.div
//                   className="image"
//                   initial={{ x: 100, opacity: 0 }}
//                   whileInView={{ x: 0, opacity: 1 }}
//                   transition={{
//                     delay: 0.2,
//                     x: { type: "spring", stiffness: "60" },
//                     opacity: { duration: 1 },
//                     ease: "easeIn",
//                     duration: 1,
//                   }}
//                 >
//                   <img src={data.img} alt="data.img" />
//                 </motion.div>
//               </div>
//             );
//           })}
//         </div>

//         {/* <div className=''></div> */}
//       </div>
//     </div>
//   );
// };

// export default Project;


import React from "react";
import "./Project.css";
import { ProjectData } from "./ProjectData";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="project__divs">
      <div className="project__div" id="project">
        <div style={{ display: "flex" }}>
          <motion.div
            className="project2"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            02 My Projects
          </motion.div>
        </div>

        <div className="project__grid">
          {ProjectData.map((data) => (
            <div className="project__grids" key={data.id}>
              <motion.div
                className="project__content"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
              >
                <a href="/" className="a">
                  {data.title}
                </a>
                <p className="project__para">{data.description}</p>

                <div className="tools">
                  {Object.values(data.tools).map((tool, index) =>
                    tool ? (
                      <div className="toolsid" key={index}>
                        {tool}
                      </div>
                    ) : null
                  )}
                </div>

                <div className="project__icon">
                  <a href={data.gitPath}>
                    <GitHubIcon className="header__icons" />
                  </a>
                  <a href={data.path}>
                    <LaunchIcon className="header__icons" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="image"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
              >
                <img src={data.img} alt="data.img" />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;

