import { useState, useEffect } from "react";
import { Menu, X, Home, User, Folder, Mail , Briefcase } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", link: "/", icon: Home },
    { name: "About Me", link: "/about", icon: User },
    { name: "Projects", link: "/projects", icon: Folder },
    { name: "Services", link: "/services", icon: Briefcase },
    { name: "Contact", link: "/contact", icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-[#020b1f]/95 via-[#0b1e3a]/90 to-[#020b1f]/95 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.9)] border-b border-blue-900/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <motion.h1 
          animate={{ y: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-3xl font-extrabold tracking-widest relative group"
        >
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            AZAM
          </span>
          <span className="absolute inset-0 blur-lg opacity-40 bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 group-hover:opacity-70 transition"></span>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-12 text-blue-100/80 font-semibold">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group flex items-center gap-2"
              >
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `flex items-center gap-2 transition duration-300 ${
                      isActive ? "text-white" : "hover:text-white"
                    }`
                  }
                >
                  <motion.span whileHover={{ scale: 1.2, rotate: 5 }}>
                    <Icon size={18} />
                  </motion.span>
                  {item.name}
                </NavLink>

                {/* underline same */}
                <span className="absolute left-0 -bottom-2 w-0 h-[3px] bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transition-all duration-500 group-hover:w-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
              </motion.li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
            <NavLink
              to="/contact"
              className="relative px-6 py-2 rounded-full text-white font-semibold overflow-hidden group"
            >
              <span className="relative z-10">Hire Me</span>
              <span className="absolute inset-0 bg-[linear-gradient(270deg,#2563eb,#1d4ed8,#0ea5e9,#2563eb)] bg-[length:600%_600%] animate-[gradientMove_6s_ease_infinite]"></span>
              <span className="absolute inset-0 blur-xl opacity-60 group-hover:opacity-100 transition bg-blue-500"></span>
            </NavLink>
          </motion.div>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-blue-100 hover:bg-white/10 transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-6 pb-6 bg-[#020b1f]/95 backdrop-blur-2xl">
              <ul className="flex flex-col space-y-6 text-blue-100/80">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <NavLink
                        to={item.link}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center gap-3 text-lg transition ${
                            isActive ? "text-white" : "hover:text-white"
                          }`
                        }
                      >
                        <Icon size={20} />
                        {item.name}
                      </NavLink>
                    </motion.li>
                  );
                })}
              </ul>

              <motion.div whileHover={{ scale: 1.05 }}>
                <NavLink
                  to="/contact"
                  className="mt-6 block text-center px-5 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg"
                >
                  Hire Me
                </NavLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* existing keyframe untouched */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </motion.nav>
  );
}