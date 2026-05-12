import React from "react";
import Navbar from "../components/Navbar.jsx";
import { motion } from "framer-motion";
// import { FiExternalLink } from "react-icons/fi"
import { MdOpenInNew } from "react-icons/md"
import { FaGithub } from "react-icons/fa";
import Cursor from "../components/Cursor.jsx";

// ✅ Projects Data (yahan tum links baad mein add kar dena)
const projects = [
  {
    title: "Firestore CRUD",
    description: "A dynamic web application built using HTML, CSS, JavaScript and Firebase Firestore. It allows users to perform full CRUD operations — create, read, update and delete data in real-time without any page refresh, powered by Firestore's live database.",
    image: "https://res.cloudinary.com/difaskylg/image/upload/v1778060357/project1_eknng8.jpg",
    live: "https://azam-web788.github.io/Firebase-firestore-Project/",
    github: "https://github.com/Azam-web788/Firebase-firestore-Project",
  },
  {
    title: "Phone Market",
    description: "A fully responsive phone store website developed with HTML, CSS and JavaScript. It features a clean and modern product listing layout where users can browse different phone models with smooth UI interactions and an attractive storefront design.",
    image: "https://res.cloudinary.com/difaskylg/image/upload/v1778060367/project2_me9shu.jpg",
    live: "https://azam-web788.github.io/Phone-app/",
    github: "https://github.com/Azam-web788/Phone-app",
  },
  {
    title: "Product Api",
    description: "An interactive product filtering application built with HTML, CSS and JavaScript. Users can search and filter products dynamically based on categories without any page reload, making the browsing experience fast, smooth and user friendly.",
    image: "https://res.cloudinary.com/difaskylg/image/upload/v1778060422/project7_uwpaeg.jpg",
    live: "https://azam-web788.github.io/Product-Api/",
    github: "https://github.com/Azam-web788/Product-Api",
  },
  {
    title: "Fullstack Blogging App",
    description: "A complete full stack blogging platform developed using React.js on the frontend with Express.js and MongoDB on the backend. Users can register, login, create new blog posts, edit existing ones and delete them, with all data stored securely in MongoDB.",
    image: "https://res.cloudinary.com/difaskylg/image/upload/v1778060391/project4_mzydlt.jpg",
    live: "https://blogging-app-f18.vercel.app/",
    github: "https://github.com/Azam-web788/Blogging-app",
  },
  {
    title: "Text Utils",
    description: "A feature-rich text utility application built entirely with React.js. It provides multiple tools to manipulate text such as converting to uppercase or lowercase, removing extra spaces, copying text to clipboard and counting words and characters in real time.",
    image: "https://res.cloudinary.com/difaskylg/image/upload/v1778060403/project5_ankwid.jpg",
    live: "https://text-utils-reactjs-fawn.vercel.app/",
    github: "https://github.com/Azam-web788/Text-Utils-Reactjs",
  },
  {
    title: "MERN Authentication",
    description: "A robust and secure full stack authentication system built with React.js, Express.js and MongoDB. It includes complete user registration and login functionality, JWT based authentication, protected routes and session management for a safe user experience.",
    image: "https://res.cloudinary.com/difaskylg/image/upload/v1778060415/project6_hdo6bw.jpg",
    live: "https://fullstack-authentication-5v1s.vercel.app",
    github: "https://github.com/Azam-web788/fullstack-authentication",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#020b1f] text-white relative overflow-hidden">
      <Cursor />
      <Navbar />

      {/* Glow Blobs */}
      <div className="fixed top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3b82f655, transparent 70%)' }} />
      <div className="fixed bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06b6d444, transparent 70%)' }} />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-black text-center mt-28"
      >
        My{" "}
        <span
          style={{
            background: "linear-gradient(90deg, #60a5fa, #22d3ee, #818cf8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Projects
        </span>
      </motion.h1>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 px-10 max-w-[1100px] mx-auto pb-20">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-[#020b1f]/60 backdrop-blur-md border border-blue-900/30 rounded-2xl overflow-hidden hover:scale-105 transition duration-300 hover:shadow-[0_0_25px_#2563eb55]"
          >

            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[200px] object-cover"
            />

            {/* Content */}
            <div className="p-5 flex flex-col gap-3">
              <h2 className="text-xl font-bold text-white">
                {project.title}
              </h2>

              <p className="text-sm text-blue-200">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-3 mt-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-1 px-4 py-2 text-sm rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:scale-105 transition hover:shadow-[0_0_15px_#2563eb55]"
                >
                <MdOpenInNew />  Live Preview
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-1 px-4 py-2 text-sm rounded-full border border-blue-400 text-blue-200 hover:bg-blue-500/20 transition hover:scale-105 hover:shadow-[0_0_15px_#2563eb55]"
                >
                  <FaGithub />  GitHub
                </a>
              </div>
            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
}