import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'How much does AC repair cost?',
    a: 'AC repair costs vary depending on the issue and the type of unit. Basic repairs start from SAR 150, while complex repairs may cost more. We provide a free inspection and upfront quote before any work begins — no hidden charges.',
  },
  {
    q: 'Do you provide emergency service?',
    a: 'Yes! We offer 24/7 emergency repair service across all major Saudi cities. Call or WhatsApp us anytime and a technician will be dispatched to your location within 2 hours.',
  },
  {
    q: 'How long does a repair typically take?',
    a: 'Most standard repairs are completed within 1–3 hours. Complex issues or repairs requiring special parts may take 24–48 hours. We always keep you informed of the timeline.',
  },
  {
    q: 'Do you use original spare parts?',
    a: 'Absolutely. We only use genuine, manufacturer-approved spare parts for all repairs. This ensures the longevity of the repair and maintains your appliance warranty.',
  },
  {
    q: 'Do you provide a warranty on repairs?',
    a: 'Yes, all our repair services come with a 90-day warranty on both labor and parts. If the same issue recurs within the warranty period, we fix it at no additional charge.',
  },
  {
    q: 'Which cities do you cover in Saudi Arabia?',
    a: 'We currently serve Riyadh, Jeddah, Dammam, Al Khobar, Makkah, Madinah, Taif, and many other cities. We are continuously expanding our coverage across the Kingdom.',
  },
]

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="border border-gray-200 rounded-2xl overflow-hidden hover:border-[#0F4C81]/30 transition-colors"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#1E293B] pr-4">{faq.q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            open ? 'bg-[#0F4C81] text-white' : 'bg-gray-100 text-gray-500'
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-5 md:px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 bg-blue-50/30">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0F4C81] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] mb-4">
            Frequently Asked{' '}
            <span className="text-[#0F4C81]">Questions</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.q} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
