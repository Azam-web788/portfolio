import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import { Download } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {motion} from "framer-motion";
const titles = [
  "Full Stack Developer",
  "MERN Stack Developer", 
  "Frontend Developer",
  "Backend Developer"
];

export default function Home() {
  const [displayed, setDisplayed] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    const delay = isDeleting ? 45 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, displayed.length + 1);
        setDisplayed(next);
        if (next === current) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        const next = displayed.slice(0, -1);
        setDisplayed(next);
        if (next === "") {
          setIsDeleting(false);
          setTitleIndex(i => (i + 1) % titles.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, titleIndex]);

  return (
    <div className="min-h-screen bg-[#020b1f] text-white relative overflow-hidden">
      
      <Navbar />

      {/* Glow Blobs */}
      <div className="fixed top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3b82f655, transparent 70%)' }} />
      <div className="fixed bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06b6d444, transparent 70%)' }} />

      {/* Hero */}
      <div className="flex items-center justify-between flex-wrap min-h-screen px-16 gap-16 max-w-[1100px] mx-auto mt-20">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 flex-1"
        >

          <motion.h1 
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-black leading-tight"
          >
            Hi There! I'm{" "}
            <span style={{
              background: 'linear-gradient(90deg, #60a5fa, #22d3ee, #818cf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
             MUHAMMAD AZAM
            </span>
          </motion.h1>

          {/* Typewriter */}
          <div className="flex items-center h-8 text-xl font-semibold text-[#93c5fd]">
            <span className="text-[#22d3ee] font-semibold">{displayed}</span>
            <span style={{
              display: 'inline-block',
              width: '2px',
              height: '1.3em',
              background: '#22d3ee',
              marginLeft: '2px',
              verticalAlign: 'middle',
              animation: 'blink 0.7s step-end infinite',
            }} />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[#93c5fd] max-w-[420px] leading-7"
          >
            I am a passionate Full Stack Developer with a strong focus on building high-quality web applications and software solutions. I enjoy turning ideas into real, functional products that are both visually appealing and highly efficient. I am constantly learning new tools and technologies to improve my skills and stay up to date with modern development trends.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 flex-wrap mt-2"
          >
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="./cv.pdf"
              download="./cv.pdf"
              className="px-7 py-3 rounded-full font-bold text-white flex items-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
                boxShadow: '0 0 20px #2563eb55',
              }}
            >
              <Download /> Download CV
            </motion.a>

            {/* Social Icons */}
            <div className="flex gap-3 mt-2">
              {[
                { icon: <FaLinkedin size={18} />, href: "https://www.linkedin.com/in/m-azam-khan-832877379/" },
                { icon: <FaGithub size={18} />, href: "https://github.com/Azam-web788/" },
                { icon: <FaInstagram size={18} />, href: "https://www.instagram.com/code_with_azam/" },
                { icon: <FaXTwitter size={18} />, href: "https://x.com/MuhammadAzam170" },
              ].map(({ icon, href }, i) => (
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-[#93c5fd] border border-[#60a5fa] rounded-full p-2"
                  style={{ width: '44px', height: '44px' }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

        </motion.div>

        {/* Right: Image + Rings */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex-shrink-0 flex items-center justify-center"
          style={{ width: '280px', height: '280px' }}
        >

          {/* Ring 1 */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            style={{
              position: 'absolute',
              width: '370px', height: '370px',
              borderRadius: '50%',
              border: '2px dashed #3b82f6',
              borderTopColor: 'transparent',
              borderRightColor: 'transparent',
              opacity: 0.8,
            }}
          />

          {/* Ring 2 */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            style={{
              position: 'absolute',
              width: '320px', height: '320px',
              borderRadius: '50%',
              border: '2px dashed #22d3ee',
              borderBottomColor: 'transparent',
              borderLeftColor: 'transparent',
              opacity: 0.8,
            }}
          />

          {/* Ring 3 */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            style={{
              position: 'absolute',
              width: '290px', height: '290px',
              borderRadius: '50%',
              border: '1.5px dashed #818cf8',
              borderTopColor: 'transparent',
              opacity: 0.5,
            }}
          />

          {/* Image */}
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="https://avatars.githubusercontent.com/u/187546672?v=4"
            alt="Azam"
            style={{
              width: '270px', height: '270px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '3px solid #2563eb',
              boxShadow: '0 0 30px #2563eb88, 0 0 60px #06b6d433',
              position: 'relative',
              zIndex: 10,
            }}
          />

        </motion.div>

      </div>

      {/* Keyframes via style tag */}
      <style>{`
        @keyframes spinCW {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes spinCCW {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>

    </div>
  );
}