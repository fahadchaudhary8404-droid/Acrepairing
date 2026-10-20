import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'أحمد المطيري',
    location: 'العليا، الرياض',
    service: 'إصلاح مكيف',
    rating: 5,
    text: 'توقف مكيف السبليت عن التبريد في منتصف الصيف. جاء فريق CoolFix Pro خلال ساعة وأصلحوه بالكامل. احترافية عالية وسعر عادل. أنصح بهم بشدة!',
    avatar: 'أم',
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'فاطمة القحطاني',
    location: 'الملز، الرياض',
    service: 'إصلاح ثلاجة',
    rating: 5,
    text: 'الفني كان ماهراً وأميناً. أصلح كمبروسر الثلاجة بقطع غيار أصلية وأعطانا ضمان 3 أشهر. سنتصل بهم مجدداً بالتأكيد.',
    avatar: 'فق',
    color: 'from-teal-500 to-teal-600',
  },
  {
    name: 'خالد الشهري',
    location: 'الروضة، الرياض',
    service: 'إصلاح غسالة',
    rating: 5,
    text: 'الغسالة كانت تسرب الماء في كل مكان. اتصلت بـ CoolFix Pro وجاؤوا في نفس اليوم. أصلحوها بسرعة وبسعر معقول جداً. خدمة ممتازة!',
    avatar: 'خش',
    color: 'from-purple-500 to-violet-600',
  },
  {
    name: 'سارة الدوسري',
    location: 'الورود، الرياض',
    service: 'صيانة مكيفات',
    rating: 5,
    text: 'قاموا بصيانة 4 وحدات مكيف في منزلي. تنظيف شامل وفحص الغاز وتقرير كامل بعد الانتهاء. فريق رائع، منضبط ونظيف في العمل.',
    avatar: 'سد',
    color: 'from-pink-500 to-rose-500',
  },
  {
    name: 'عبدالله الحربي',
    location: 'النخيل، الرياض',
    service: 'إصلاح طارئ للمكيف',
    rating: 5,
    text: 'اتصلت الساعة 11 مساءً لإصلاح طارئ للمكيف. وصل الفني خلال 45 دقيقة! أصلح المشكلة في الحال. خدمة 24/7 حقيقية - رائعة جداً.',
    avatar: 'عح',
    color: 'from-orange-500 to-amber-500',
  },
  {
    name: 'نورا العنزي',
    location: 'الياسمين، الرياض',
    service: 'إصلاح فرن',
    rating: 5,
    text: 'توقف الفرن الغاز قبل العيد. جاء CoolFix Pro بسرعة وأصلحوه بقطع أصلية. موظفون مؤدبون وعمل نظيف. 5 نجوم بدون تردد!',
    avatar: 'نع',
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
      <div className="flex items-start justify-between">
        <Quote className="w-8 h-8 text-[#14B8A6] opacity-50" />
        <span className={`text-xs font-semibold bg-gradient-to-r ${t.color} text-white px-3 py-1 rounded-full`}>
          {t.service}
        </span>
      </div>

      <p className="text-slate-600 text-sm leading-relaxed flex-1">"{t.text}"</p>

      <div className="flex gap-0.5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>

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
            آراء العملاء
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] mb-3">
            موثوق من قبل{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F4C81] to-[#14B8A6]">
              سكان الرياض
            </span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            تقييمات حقيقية من عملائنا في أحياء الرياض.
          </p>

          <div className="inline-flex items-center gap-3 bg-white border border-slate-100 rounded-2xl px-5 py-3 shadow-sm mt-6">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="font-extrabold text-[#1E293B] text-lg">4.9</span>
            <span className="text-slate-400 text-sm">من +1000 تقييم</span>
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
