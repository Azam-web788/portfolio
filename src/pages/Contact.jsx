import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Cursor from "../components/Cursor.jsx";
import toast from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading , setLoading] = useState(false);

 const handleSubmit = async (event) => {
  event.preventDefault();
  setLoading(true);

  try {
    const response = await fetch(
      "https://email-sending-e2e4.vercel.app/send/mail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );

    const data = await response.json();

    if (data.error) {
      toast.error(data.error);
      console.log("Error sending message:", data.error);
    } else {
      toast.success("Message sent successfully");
    }

  } catch (error) {
    console.error("Error sending message:", error);
    toast.error("Something went wrong");
  } finally {
    setLoading(false);
  }
};
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
        Contact{" "}
        <span style={{
          background: "linear-gradient(90deg, #60a5fa, #22d3ee, #818cf8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          Me
        </span>
      </motion.h1>

      <p className="text-center text-[#93c5fd] mt-3 mb-12">
        Feel free to reach out — I'd love to hear from you!
      </p>

      {/* Main Content */}
      <div className="flex flex-wrap gap-10 justify-center px-10 max-w-[1100px] mx-auto pb-20">

        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 flex-1 min-w-[260px]"
        >
          <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
          <p className="text-[#93c5fd] leading-7">
            I am always open to new opportunities, collaborations, or just a friendly chat. Drop me a message and I will get back to you as soon as possible.
          </p>

          {/* Contact Info Cards */}
          {[
            { icon: <Mail size={20} />, label: "Email", value: "muhammadazamkhan170@gmail.com" },
            { icon: <Phone size={20} />, label: "Phone", value: "+92 334 3327308" },
            { icon: <MapPin size={20} />, label: "Location", value: "Karachi, Pakistan" },
          ].map(({ icon, label, value }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="flex items-center gap-4 bg-[#020b1f]/60 border border-blue-900/30 rounded-2xl px-5 py-4"
              style={{ backdropFilter: "blur(10px)" }}
            >
              <div className="text-[#22d3ee]">{icon}</div>
              <div>
                <p className="text-xs text-[#60a5fa] font-semibold">{label}</p>
                <p className="text-white text-sm">{value}</p>
              </div>
            </motion.div>
          ))}

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
                className="flex items-center justify-center text-[#93c5fd] border border-[#60a5fa] rounded-full p-2 hover:shadow-[0_0_10px_#2563eb55]"
                style={{ width: "44px", height: "44px" }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 min-w-[280px] bg-[#020b1f]/60 border border-blue-900/30 rounded-2xl p-8"
          style={{ backdropFilter: "blur(10px)" }}
        >
          <h2 className="text-2xl font-bold mb-6 text-white">Send a Message</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#60a5fa]">Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="bg-[#0f172a] border border-blue-900/40 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#22d3ee] transition"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#60a5fa]">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="bg-[#0f172a] border border-blue-900/40 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#22d3ee] transition"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#60a5fa]">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows={5}
                className="bg-[#0f172a] border border-blue-900/40 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#22d3ee] transition resize-none"
              />
            </div>

            <motion.button
  whileHover={{ scale: loading ? 1 : 1.04 }}
  whileTap={{ scale: loading ? 1 : 0.96 }}
  type="submit"
  disabled={loading}
  onClick={handleSubmit}
  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-white mt-2 disabled:opacity-60"
  style={{
    background: "linear-gradient(135deg, #2563eb, #06b6d4)",
    boxShadow: "0 0 20px #2563eb55",
  }}
>
  {loading ? (
    <>
      {/* Spinner */}
      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      Sending...
    </>
  ) : (
    <>
      <Send size={18} /> Send Message
    </>
  )}
</motion.button>
          </form>
        </motion.div>

      </div>

    </div>
  );
}