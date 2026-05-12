import React from "react";
import Navbar from "../components/Navbar.jsx";

import { motion } from "framer-motion";
import { FaCss3Alt, FaGitAlt, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiBootstrap, SiExpress, SiFirebase, SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Cursor from "../components/Cursor.jsx";
import AboutImage3D from "../components/AboutImage.jsx";

export default function About() {
  return (
    <div className="min-h-screen bg-[#020b1f] text-white relative overflow-hidden">
      <Cursor />
      <Navbar />

      {/* Glow Blobs */}
      <div className="fixed top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3b82f655, transparent 70%)' }} />
      <div className="fixed bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06b6d444, transparent 70%)' }} />

      {/* Main Section */}
      <div className="flex items-center justify-between flex-wrap min-h-screen px-16 gap-16 max-w-[1100px] mx-auto mt-20">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-5 flex-1"
        >
          <motion.h1
          initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          className="text-5xl font-black">
            About{" "}
            <span style={{
              background: 'linear-gradient(90deg, #60a5fa, #22d3ee, #818cf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Me
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#93c5fd] leading-7 max-w-[500px]"
          >
            I am a passionate Full Stack Developer who loves building modern and
            scalable web applications. I enjoy solving real-world problems
            through clean and efficient code. My journey in development started
            with curiosity and has now turned into a strong passion for creating
            impactful digital experiences.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[#93c5fd] leading-7 max-w-[500px]"
          >
            I specialize in MERN Stack development and have experience working
            on both frontend and backend technologies. I continuously explore
            new tools and frameworks to improve my skills and stay updated with
            the latest industry trends.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-[#93c5fd] leading-7 max-w-[500px]"
          >
            My goal is to build user-friendly, high-performance, and visually
            appealing applications that deliver real value to users.
          </motion.p>
        </motion.div>

        {/* Right Image + Rings */}
        {/* Right Image + Rings (3D VERSION) */}
<motion.div
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  <AboutImage3D />
</motion.div>

      </div>
      <div>
  <motion.h1
  initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
  className="text-4xl font-bold text-center mt-15 text-white">
    My Professional Skills
  </motion.h1>

  {/* Skills Grid */}
  <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-12 px-10 max-w-[1100px] mx-auto">

    {[
      { name: "HTML", icon: <FaHtml5 size={40} className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-400" /> },
      { name: "React", icon: <FaReact size={40} className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs size={40} className="text-white" /> },
      { name: "Tailwind", icon: <SiTailwindcss size={40} className="text-cyan-300" /> },
      { name: "Bootstrap", icon: <SiBootstrap size={40} className="text-purple-500" /> },
      { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
      { name: "Express", icon: <SiExpress size={40} className="text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-400" /> },
      { name: "Git", icon: <FaGitAlt size={40} className="text-orange-600" /> },
      { name: "Firebase", icon: <SiFirebase size={40} className="text-yellow-500" /> },
    ].map((skill, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 }}
        className="flex flex-col items-center justify-center p-5 rounded-xl border border-blue-900/30 bg-[#020b1f]/60 backdrop-blur-md hover:scale-105 transition duration-300 hover:shadow-[0_0_20px_#2563eb55]"
      >
        {skill.icon}
        <p className="mt-3 text-sm text-blue-200">{skill.name}</p>
      </motion.div>
    ))}
    <br /><br />
  </motion.div>
</div>


      

    </div>
  );
}