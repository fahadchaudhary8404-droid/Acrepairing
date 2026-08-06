import { motion } from 'framer-motion'
import { Phone, MessageCircle, CheckCircle, Users, Clock, ThumbsUp } from 'lucide-react'
import heroImage from '../assets/ChatGPT Image Jul 23, 2026, 11_36_07 PM.png'

const stats = [
  { icon: Users, value: '1000+', label: 'Happy Customers' },
  { icon: CheckCircle, value: '10+', label: 'Years Experience' },
  { icon: Clock, value: '24/7', label: 'Support' },
  { icon: ThumbsUp, value: '100%', label: 'Satisfaction' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Full background image */}
      <img
        src={heroImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark overlay so text is readable */}
      {/* <div className="absolute inset-0 bg-[#0F4C81]/70" /> */}

      {/* Subtle animated blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#14B8A6]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-[#14B8A6] rounded-full animate-pulse" />
            Available 24/7 — Saudi Arabia
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-1xl sm:text-5xl lg:text-6xl xl:text-5xl font-extrabold text-white leading-tight mb-6"
          >
            Professional AC &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] to-[#60a5fa]">
              Fridge Repair
            </span>
            <br />
            Services in Saudi Arabia
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl font-[20px]  text-blue-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Fast, Reliable and Affordable Home Appliance Repair Services.
            Certified technicians at your doorstep.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#14B8A6] to-[#2563EB] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all"
            >
              <Phone className="w-5 h-5" />
              Book Service
            </a>
            <a
              href="https://wa.me/966581829201?text=Hello%2C%20I%20need%20AC%20%26%20Fridge%20repair%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 hover:scale-105 transition-all"
            >
              <MessageCircle className="w-5 h-5 text-green-400" />
              WhatsApp Now
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-colors"
              >
                <Icon className="w-6 h-6 text-[#14B8A6] mx-auto mb-2" />
                <div className="text-2xl font-extrabold text-white">{value}</div>
                <div className="text-blue-200 text-sm">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  )
}
