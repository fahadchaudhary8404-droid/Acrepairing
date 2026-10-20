import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'كم تكلفة إصلاح المكيف؟',
    a: 'تتفاوت تكلفة إصلاح المكيف حسب المشكلة ونوع الجهاز. تبدأ الإصلاحات البسيطة من 150 ريال، بينما قد تكون الإصلاحات المعقدة أعلى. نقدم فحصاً مجانياً وعرضاً واضحاً للسعر قبل البدء بأي عمل — بدون رسوم خفية.',
  },
  {
    q: 'هل تقدمون خدمة طارئة؟',
    a: 'نعم! نقدم خدمة إصلاح طارئة على مدار الساعة 24/7 في جميع أحياء الرياض. اتصل بنا أو راسلنا على واتساب في أي وقت وسيصل الفني إلى موقعك خلال ساعتين.',
  },
  {
    q: 'كم يستغرق الإصلاح عادةً؟',
    a: 'تُنجز معظم الإصلاحات القياسية في مدة تتراوح بين ساعة و3 ساعات. المشاكل المعقدة أو التي تتطلب قطع غيار خاصة قد تحتاج من 24 إلى 48 ساعة. نحرص دائماً على إبلاغك بالوقت المتوقع.',
  },
  {
    q: 'هل تستخدمون قطع غيار أصلية؟',
    a: 'بالتأكيد. نستخدم فقط قطع الغيار الأصلية والمعتمدة من الشركة المصنعة في جميع الإصلاحات. هذا يضمن طول عمر الإصلاح والحفاظ على ضمان جهازك.',
  },
  {
    q: 'هل تقدمون ضماناً على الإصلاحات؟',
    a: 'نعم، جميع خدمات الإصلاح لدينا تأتي بضمان 90 يومًا على العمالة وقطع الغيار. إذا تكررت نفس المشكلة خلال فترة الضمان، نصلحها دون أي تكلفة إضافية.',
  },
  {
    q: 'ما هي المناطق التي تخدمونها في الرياض؟',
    a: 'نخدم جميع أحياء الرياض بما فيها: العليا، الملز، الروضة، الورود، النخيل، الياسمين، النزهة، السليمانية، المربع وجميع الأحياء الأخرى.',
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
        className="w-full flex items-center justify-between p-5 md:p-6 text-right bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#1E293B] pl-4">{faq.q}</span>
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
            <div className="px-5 md:px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 bg-blue-50/30 text-right">
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
            الأسئلة الشائعة
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] mb-4">
            الأسئلة{' '}
            <span className="text-[#0F4C81]">المتكررة</span>
          </h2>
          <p className="text-gray-500 text-lg">
            لديك سؤال؟ لدينا الإجابة.
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
