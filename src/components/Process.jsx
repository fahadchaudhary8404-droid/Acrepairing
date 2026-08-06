import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PhoneCall, Search, Wrench, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: PhoneCall,
    title: 'Contact Us',
    desc: 'Call, WhatsApp, or fill out our form. We respond within minutes.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    number: '02',
    icon: Search,
    title: 'Inspection',
    desc: 'Our certified technician arrives and diagnoses the issue thoroughly.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Repair',
    desc: 'We fix the problem using original spare parts with precision.',
    color: 'from-teal-500 to-teal-600',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Done',
    desc: 'Job complete with a 90-day warranty. Your satisfaction guaranteed.',
    color: 'from-green-500 to-green-600',
  },
]

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0F4C81] to-[#1a5c99] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-white/20">
            How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Simple 4-Step Process
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Getting your appliance repaired is easy and hassle-free with CoolFix Pro.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line - desktop */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-white/20 z-0" />

          {steps.map(({ number, icon: Icon, title, desc, color }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative z-10 text-center"
            >
              <div className="relative inline-block mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mx-auto shadow-2xl`}>
                  <Icon className="w-9 h-9 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-white text-[#0F4C81] rounded-full flex items-center justify-center text-xs font-extrabold shadow-lg">
                  {number}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-blue-200 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
