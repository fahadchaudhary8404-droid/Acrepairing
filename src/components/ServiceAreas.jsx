import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin } from 'lucide-react'

const cities = [
  { name: 'Riyadh', desc: 'Capital Region', emoji: '🏙️', color: 'from-blue-500 to-blue-600' },
  { name: 'Jeddah', desc: 'Western Province', emoji: '🌊', color: 'from-teal-500 to-teal-600' },
  { name: 'Dammam', desc: 'Eastern Province', emoji: '🏭', color: 'from-indigo-500 to-indigo-600' },
  { name: 'Al Khobar', desc: 'Eastern Province', emoji: '🏢', color: 'from-purple-500 to-purple-600' },
  { name: 'Makkah', desc: 'Holy Capital', emoji: '🕌', color: 'from-green-500 to-green-600' },
  { name: 'Madinah', desc: 'Holy City', emoji: '🌿', color: 'from-emerald-500 to-emerald-600' },
  { name: 'Taif', desc: 'Mountain City', emoji: '⛰️', color: 'from-orange-500 to-orange-600' },
  { name: 'More Cities', desc: 'Expanding coverage', emoji: '📍', color: 'from-gray-500 to-gray-600' },
]

export default function ServiceAreas() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0F4C81] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4" />
            Service Areas
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] mb-4">
            We Serve Across{' '}
            <span className="text-[#0F4C81]">Saudi Arabia</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Our certified technicians are available in major cities across the Kingdom.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
          {cities.map(({ name, desc, emoji, color }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="group bg-gray-50 hover:bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-[#0F4C81]/20 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform text-2xl`}>
                {emoji}
              </div>
              <h3 className="font-bold text-[#1E293B] mb-1">{name}</h3>
              <p className="text-gray-500 text-xs">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
