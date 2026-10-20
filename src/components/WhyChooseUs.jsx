import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Clock, DollarSign, Zap, Shield, Star, Wrench, HeadphonesIcon } from 'lucide-react'

const reasons = [
  { icon: Award, title: 'فنيون معتمدون', desc: 'جميع الفنيين معتمدون ومدربون على جميع ماركات الأجهزة الكبرى.', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: Clock, title: 'طوارئ 24/7', desc: 'خدمة إصلاح طارئة على مدار الساعة، 365 يومًا في السنة.', color: 'text-red-500', bg: 'bg-red-50' },
  { icon: DollarSign, title: 'أسعار معقولة', desc: 'أسعار شفافة ومحددة مسبقًا بدون رسوم خفية أو مفاجآت.', color: 'text-green-600', bg: 'bg-green-50' },
  { icon: Zap, title: 'استجابة سريعة', desc: 'خدمة في نفس اليوم. نصل إلى موقعك خلال ساعتين من اتصالك.', color: 'text-amber-500', bg: 'bg-amber-50' },
  { icon: Shield, title: 'ضمان شامل', desc: 'ضمان 90 يومًا على جميع أعمال الإصلاح وقطع الغيار المستخدمة.', color: 'text-purple-600', bg: 'bg-purple-50' },
  { icon: Star, title: 'شركة موثوقة', desc: 'أكثر من 1000 عميل راضٍ بمتوسط تقييم 4.9 نجمة.', color: 'text-yellow-500', bg: 'bg-yellow-50' },
  { icon: Wrench, title: 'معدات احترافية', desc: 'نستخدم أحدث أدوات التشخيص والإصلاح الاحترافية.', color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { icon: HeadphonesIcon, title: 'دعم العملاء', desc: 'فريق دعم متخصص جاهز للمساعدة عبر الهاتف أو واتساب أو البريد الإلكتروني.', color: 'text-teal-600', bg: 'bg-teal-50' },
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
            لماذا تختارنا
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] mb-4">
            مميزات{' '}
            <span className="text-[#0F4C81]">CoolFix Pro</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            نحن لا نصلح الأجهزة فحسب بل نبني ثقة دائمة مع كل عميل نخدمه.
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
