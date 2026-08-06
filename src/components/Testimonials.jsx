import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ahmed Al-Mutairi',
    location: 'Al Olaya, Riyadh',
    service: 'AC Repair',
    rating: 5,
    text: 'My split AC stopped cooling in the middle of summer. CoolFix Pro came within 1 hour and fixed it completely. Very professional and the price was fair. Highly recommended!',
    avatar: 'AM',
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Fatima Al-Qahtani',
    location: 'Al Malaz, Riyadh',
    service: 'Fridge Repair',
    rating: 5,
    text: 'The technician was very skilled and honest. He fixed my refrigerator compressor using original parts and gave a 3-month warranty. Will definitely call again.',
    avatar: 'FQ',
    color: 'from-teal-500 to-teal-600',
  },
  {
    name: 'Khalid Al-Shehri',
    location: 'Al Rawdah, Riyadh',
    service: 'Washing Machine',
    rating: 5,
    text: 'Washing machine was leaking water everywhere. Called CoolFix Pro and they came the same day. Fixed it quickly at a very reasonable price. Excellent service!',
    avatar: 'KS',
    color: 'from-purple-500 to-violet-600',
  },
  {
    name: 'Sara Al-Dosari',
    location: 'Al Wurud, Riyadh',
    service: 'AC Maintenance',
    rating: 5,
    text: 'They serviced all 4 AC units in my house. Very thorough cleaning, gas check, and full report given after. Great team, punctual and clean work.',
    avatar: 'SD',
    color: 'from-pink-500 to-rose-500',
  },
  {
    name: 'Abdullah Al-Harbi',
    location: 'Al Nakheel, Riyadh',
    service: 'Emergency AC Repair',
    rating: 5,
    text: 'Called at 11pm for emergency AC repair. The technician arrived in 45 minutes! Fixed the problem on the spot. Real 24/7 service — very impressive.',
    avatar: 'AH',
    color: 'from-orange-500 to-amber-500',
  },
  {
    name: 'Noura Al-Anazi',
    location: 'Al Yasmin, Riyadh',
    service: 'Oven Repair',
    rating: 5,
    text: 'My gas oven stopped working before Eid. CoolFix Pro came quickly and fixed it with original parts. Very polite staff and clean work. 5 stars without hesitation!',
    avatar: 'NA',
    color: 'from-green-500 to-emerald-600',
  },
]

function TestimonialCard({ t, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
    >
      {/* Top row */}
      <div className="flex items-start justify-between">
        <Quote className="w-8 h-8 text-[#14B8A6] opacity-50" />
        <span className={`text-xs font-semibold bg-gradient-to-r ${t.color} text-white px-3 py-1 rounded-full`}>
          {t.service}
        </span>
      </div>

      {/* Review text */}
      <p className="text-slate-600 text-sm leading-relaxed flex-1">"{t.text}"</p>

      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
        <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm shadow`}>
          {t.avatar}
        </div>
        <div>
          <div className="font-bold text-[#1E293B] text-sm">{t.name}</div>
          <div className="text-slate-400 text-xs">{t.location}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="testimonials" className="py-16 lg:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0F4C81] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Customer Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] mb-3">
            Trusted by Riyadh{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F4C81] to-[#14B8A6]">
              Residents
            </span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Real reviews from our customers across Riyadh neighborhoods.
          </p>

          {/* Overall rating bar */}
          <div className="inline-flex items-center gap-3 bg-white border border-slate-100 rounded-2xl px-5 py-3 shadow-sm mt-6">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="font-extrabold text-[#1E293B] text-lg">4.9</span>
            <span className="text-slate-400 text-sm">from 1000+ reviews</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
