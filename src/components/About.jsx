import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, DollarSign, Package, Zap, Shield, CheckCircle } from 'lucide-react'

const features = [
  { icon: Award, title: 'Certified Technicians', color: 'from-blue-500 to-blue-600' },
  { icon: DollarSign, title: 'Affordable Prices', color: 'from-green-500 to-emerald-600' },
  { icon: Package, title: 'Original Spare Parts', color: 'from-purple-500 to-violet-600' },
  { icon: Zap, title: 'Fast Service', color: 'from-orange-500 to-amber-600' },
  { icon: Shield, title: 'Warranty Provided', color: 'from-teal-500 to-cyan-600' },
]

const points = [
  'Same-day service across Saudi Arabia',
  'Transparent pricing — no hidden fees',
  'Original parts with service warranty',
]

function FadeIn({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const initial =
    direction === 'left' ? { opacity: 0, x: -40 } :
    direction === 'right' ? { opacity: 0, x: 40 } :
    { opacity: 0, y: 30 }
  return (
    <motion.div ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — Image */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="src/assets/images.png"
                  alt="CoolFix Pro Technician"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0F4C81]/25 via-transparent to-transparent" />
              </div>

              {/* Badge bottom-right */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3 border border-slate-100"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#0F4C81] to-[#14B8A6] rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-[#0F4C81] text-sm">10+ Years</div>
                  <div className="text-gray-400 text-xs">Trusted Service</div>
                </div>
              </motion.div>

              {/* Live badge top-left */}
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2 shadow"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-slate-700">Available Now</span>
              </motion.div>
            </div>
          </FadeIn>

          {/* RIGHT — Content */}
          <div className="space-y-5">
            <FadeIn delay={0.1}>
              <span className="inline-flex items-center gap-2 bg-[#0F4C81]/8 text-[#0F4C81] px-4 py-1.5 rounded-full text-sm font-semibold">
                About Us
              </span>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] leading-tight">
                 شركة الإصلاح الموثوق{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F4C81] to-[#14B8A6]">
                أكثر في المملكة
                </span>{' '} السعودية العربية 
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-slate-500 leading-relaxed">
                بأكثر من <span className="font-semibold text-[#0F4C81]"> 10 سنوات من الخبرة </span>, لقد بنت CoolFix Pro سمعةً راسخة في التميز بمجال إصلاح مكيفات الهواء والثلاجات والأجهزة المنزلية في جميع أنحاء المملكة العربية السعودية. نعتمد على فنيين معتمدين، ونستخدم قطع غيار أصلية، مع ضمان على جودة الخدمة والنتائج.
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <ul className="space-y-2.5">
                {points.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#0F4C81] to-[#14B8A6] flex items-center justify-center shrink-0">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-slate-600 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Feature pills */}
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-2 pt-1">
                {features.map(({ icon: Icon, title, color }) => (
                  <div key={title} className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl px-3 py-2 hover:shadow-sm transition-shadow">
                    <div className={`w-6 h-6 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-xs font-medium text-slate-700">{title}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* <FadeIn delay={0.35}>
              <a href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0F4C81] to-[#14B8A6] text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-lg hover:scale-105 transition-all"
              >
                Get a Free Quote
              </a>
            </FadeIn> */}
          </div>

        </div>
      </div>
    </section>
  )
}
