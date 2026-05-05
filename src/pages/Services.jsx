import React from "react";
import Navbar from "../components/Navbar.jsx";
import { motion } from "framer-motion";
import { Monitor, Server, Database, Globe } from "lucide-react";

const services = [
  {
    icon: <Monitor size={36} />,
    title: "Frontend Development",
    description:
      "I build modern, responsive, and visually stunning user interfaces using React.js, Tailwind CSS, and Framer Motion. Every project I work on is designed to deliver a smooth and engaging user experience across all devices and screen sizes.",
    techs: ["React.js", "Tailwind CSS", "Framer Motion", "HTML", "CSS", "JavaScript"],
  },
  {
    icon: <Server size={36} />,
    title: "Backend Development & APIs",
    description:
      "I develop fast, secure, and scalable backend systems and RESTful APIs using Node.js and Express.js. From user authentication to complex business logic, I ensure your server-side code is clean, efficient, and production-ready.",
    techs: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Middleware"],
  },
  {
    icon: <Database size={36} />,
    title: "Database Management",
    description:
      "I design and manage databases to store and retrieve data efficiently. Whether it is a NoSQL database like MongoDB or a real-time solution like Firebase Firestore, I ensure your data is structured, secure, and optimized for performance.",
    techs: ["MongoDB", "Firebase", "Firestore", "Mongoose", "CRUD Operations"],
  },
  {
    icon: <Globe size={36} />,
    title: "Full Stack Web Development",
    description:
      "I develop complete end-to-end web applications by combining powerful frontend interfaces with robust backend systems. From designing the UI to building APIs and managing databases, I handle the entire development process to deliver a fully functional and production-ready web application.",
    techs: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#020b1f] text-white relative overflow-hidden">

      <Navbar />

      {/* Glow Blobs */}
      <div className="fixed top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #3b82f655, transparent 70%)" }} />
      <div className="fixed bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #06b6d444, transparent 70%)" }} />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-black text-center mt-28"
      >
        My{" "}
        <span style={{
          background: "linear-gradient(90deg, #60a5fa, #22d3ee, #818cf8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          Services
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center text-[#93c5fd] mt-3 mb-16"
      >
        Here is what I can build for you
      </motion.p>

      {/* Services Cards */}
      <div className="flex flex-col gap-10 px-10 max-w-[900px] mx-auto pb-24">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-[#020b1f]/60 backdrop-blur-md border border-blue-900/30 rounded-2xl p-8 hover:shadow-[0_0_25px_#2563eb55] hover:border-[#22d3ee]/30 transition duration-300"
          >
            <div className="flex items-center gap-4 mb-5">
              {/* Icon Circle */}
              <div
                className="flex items-center justify-center rounded-full p-4 text-[#22d3ee]"
                style={{
                  background: "linear-gradient(135deg, #1e3a5f, #0e7490)",
                  boxShadow: "0 0 20px #2563eb44",
                  width: "70px",
                  height: "70px",
                  flexShrink: 0,
                }}
              >
                {service.icon}
              </div>

              <h2 className="text-2xl font-bold text-white">{service.title}</h2>
            </div>

            <p className="text-[#93c5fd] leading-7 mb-6">{service.description}</p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              {service.techs.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-semibold rounded-full border border-[#60a5fa]/40 text-[#60a5fa]"
                  style={{ background: "rgba(37, 99, 235, 0.1)" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}