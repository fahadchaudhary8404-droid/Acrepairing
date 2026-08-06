import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Award, Clock, DollarSign, Zap, Shield, Star, Wrench, HeadphonesIcon
} from 'lucide-react'

const reasons = [
  { icon: Award, title: 'Certified Experts', desc: 'All technicians are certified and trained for all major appliance brands.', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: Clock, title: '24/7 Emergency', desc: 'Round-the-clock emergency repair service, 365 days a year.', color: 'text-red-500', bg: 'bg-red-50' },
  { icon: DollarSign, title: 'Affordable Pricing', desc: 'Transparent, upfront pricing with no hidden fees or surprise charges.', color: 'text-green-600', bg: 'bg-green-50' },
  { icon: Zap, title: 'Quick Response', desc: 'Same-day service available. We arrive within 2 hours of your call.', color: 'text-amber-500', bg: 'bg-amber-50' },
  { icon: Shield, title: 'Warranty Included', desc: '90-day warranty on all repair work and spare parts used.', color: 'text-purple-600', bg: 'bg-purple-50' },
  { icon: Star, title: 'Trusted Company', desc: 'Over 1000 satisfied customers with a 4.9-star average rating.', color: 'text-yellow-500', bg: 'bg-yellow-50' },
  { icon: Wrench, title: 'Pro Equipment', desc: 'Using the latest professional diagnostic and repair tools.', color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { icon: HeadphonesIcon, title: 'Customer Support', desc: 'Dedicated support team ready to assist via phone, WhatsApp, or email.', color: 'text-teal-600', bg: 'bg-teal-50' },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0F4C81] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] mb-4">
            The CoolFix Pro{' '}
            <span className="text-[#0F4C81]">Advantage</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We don't just fix appliances — we build long-term trust with every customer we serve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ icon: Icon, title, desc, color, bg }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className="group p-6 rounded-2xl border border-gray-100 hover:border-[#0F4C81]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <Icon className={`w-7 h-7 ${color}`} />
              </div>
              <h3 className="font-bold text-[#1E293B] text-lg mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
