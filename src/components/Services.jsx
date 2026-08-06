import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Wind, Wrench, Settings, Droplets, Sparkles, AlertTriangle,
  Square, Building2, Thermometer, Zap, RefrigeratorIcon,
  WashingMachine, Microwave, Flame, Utensils, Droplet,
  ChevronDown, ArrowRight, Box
} from 'lucide-react'

const categories = [
  {
    id: 'ac',
    title: 'Air Conditioner',
    emoji: '❄️',
    color: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    textColor: 'text-blue-600',
    desc: 'All types of AC repair, installation & maintenance',
    services: [
      { icon: Wind, name: 'Split AC Repair', desc: 'All brands & models' },
      { icon: Building2, name: 'Central AC Repair', desc: 'Commercial & residential' },
      { icon: Square, name: 'Window AC Repair', desc: 'Fast turnaround' },
      { icon: Wrench, name: 'AC Installation', desc: 'Homes & offices' },
      { icon: Settings, name: 'AC Maintenance', desc: 'Regular servicing' },
      { icon: Droplets, name: 'Gas Refilling', desc: 'All refrigerant types' },
      { icon: Sparkles, name: 'AC Deep Cleaning', desc: 'Fresh & hygienic air' },
      { icon: AlertTriangle, name: 'Emergency Repair', desc: '24/7 availability' },
    ],
  },
  {
    id: 'fridge',
    title: 'Refrigerator',
    emoji: '🧊',
    color: 'from-teal-500 to-green-500',
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    textColor: 'text-teal-600',
    desc: 'Complete fridge & freezer repair services',
    services: [
      { icon: Thermometer, name: 'Cooling Problem Fix', desc: 'Not cooling? We fix it' },
      { icon: Droplet, name: 'Water Leakage Repair', desc: 'Stop leaks fast' },
      { icon: Zap, name: 'Compressor Repair', desc: 'All compressor types' },
      { icon: Settings, name: 'Thermostat Replacement', desc: 'Accurate temperature' },
      { icon: RefrigeratorIcon, name: 'Door Seal Repair', desc: 'Prevent cold air loss' },
      { icon: Sparkles, name: 'Fridge Cleaning', desc: 'Hygienic deep clean' },
      { icon: Box, name: 'Deep Freezer Repair', desc: 'Commercial & domestic' },
      { icon: Wrench, name: 'Ice Maker Repair', desc: 'All models serviced' },
    ],
  },
  {
    id: 'washing',
    title: 'Washing Machine',
    emoji: '🫧',
    color: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    textColor: 'text-violet-600',
    desc: 'Top load, front load & all brand repairs',
    services: [
      { icon: WashingMachine, name: 'Drum Repair', desc: 'Noise & vibration fix' },
      { icon: Droplet, name: 'Water Leakage Fix', desc: 'Seal & hose repair' },
      { icon: Zap, name: 'Motor Repair', desc: 'All motor types' },
      { icon: Settings, name: 'Control Board Repair', desc: 'Electronic faults' },
      { icon: Wrench, name: 'Spin Problem Fix', desc: 'Top & front load' },
      { icon: Droplets, name: 'Drainage Problem', desc: 'Pump & pipe fix' },
      { icon: Sparkles, name: 'Machine Cleaning', desc: 'Drum deep clean' },
      { icon: AlertTriangle, name: 'Error Code Fix', desc: 'All error codes' },
    ],
  },
  {
    id: 'other',
    title: 'Other Appliances',
    emoji: '🔧',
    color: 'from-orange-500 to-amber-500',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    textColor: 'text-orange-600',
    desc: 'Microwave, oven, dishwasher & more',
    services: [
      { icon: Microwave, name: 'Microwave Repair', desc: 'Quick & affordable' },
      { icon: Flame, name: 'Oven Repair', desc: 'Gas & electric ovens' },
      { icon: Utensils, name: 'Dishwasher Repair', desc: 'All brands' },
      { icon: Droplet, name: 'Water Dispenser', desc: 'Repair & maintenance' },
      { icon: Zap, name: 'Electric Stove Repair', desc: 'Burner & heating fix' },
      { icon: Wind, name: 'Exhaust Fan Repair', desc: 'Kitchen & bathroom' },
      { icon: Settings, name: 'Vacuum Cleaner', desc: 'Motor & suction fix' },
      { icon: Wrench, name: 'Water Heater Repair', desc: 'Gas & electric' },
    ],
  },
]

function CategoryCard({ cat, index }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-white rounded-3xl border-2 ${open ? cat.border : 'border-slate-100'} shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden`}
    >
      {/* Card header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-6 flex items-center gap-4"
      >
        {/* Icon */}
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-3xl shadow-lg shrink-0`}>
          {cat.emoji}
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-extrabold text-[#1E293B]">{cat.title}</h3>
          <p className="text-slate-500 text-sm mt-0.5">{cat.desc}</p>
          <span className={`inline-block mt-2 text-xs font-semibold ${cat.textColor} ${cat.bg} px-2.5 py-1 rounded-full`}>
            {cat.services.length} Services
          </span>
        </div>

        {/* Chevron */}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`w-8 h-8 rounded-full ${cat.bg} flex items-center justify-center shrink-0`}
        >
          <ChevronDown className={`w-4 h-4 ${cat.textColor}`} />
        </motion.div>
      </button>

      {/* Expanded services */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className={`mx-6 mb-6 pt-4 border-t ${cat.border} grid grid-cols-2 sm:grid-cols-4 gap-3`}>
              {cat.services.map(({ icon: Icon, name, desc }) => (
                <div key={name} className={`${cat.bg} rounded-2xl p-3 hover:shadow-md transition-shadow`}>
                  <div className={`w-8 h-8 bg-gradient-to-br ${cat.color} rounded-xl flex items-center justify-center mb-2 shadow`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-xs font-bold text-[#1E293B] leading-tight">{name}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{desc}</div>
                </div>
              ))}
            </div>
            <div className="px-6 pb-5">
              <a
                href="#contact"
                className={`inline-flex items-center gap-2 bg-gradient-to-r ${cat.color} text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow hover:scale-105 transition-transform`}
              >
                Book This Service <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="services" className="py-20 lg:py-24 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0F4C81] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] mb-3">
            Complete Appliance{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F4C81] to-[#14B8A6]">
              Repair Solutions
            </span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Tap any category to see all available services
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
