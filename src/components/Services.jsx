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
    title: 'مكيف الهواء',
    emoji: '❄️',
    color: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    textColor: 'text-blue-600',
    desc: 'إصلاح وتركيب وصيانة جميع أنواع المكيفات',
    services: [
      { icon: Wind, name: 'إصلاح مكيف سبليت', desc: 'جميع الماركات والموديلات' },
      { icon: Building2, name: 'إصلاح المكيف المركزي', desc: 'تجاري وسكني' },
      { icon: Square, name: 'إصلاح مكيف شباك', desc: 'خدمة سريعة' },
      { icon: Wrench, name: 'تركيب مكيفات', desc: 'منازل ومكاتب' },
      { icon: Settings, name: 'صيانة مكيفات', desc: 'صيانة دورية' },
      { icon: Droplets, name: 'تعبئة غاز', desc: 'جميع أنواع الغاز' },
      { icon: Sparkles, name: 'تنظيف مكيفات', desc: 'تنظيف عميق وشامل' },
      { icon: AlertTriangle, name: 'إصلاح طارئ', desc: 'متاح 24/7' },
    ],
  },
  {
    id: 'fridge',
    title: 'الثلاجة',
    emoji: '🧊',
    color: 'from-teal-500 to-green-500',
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    textColor: 'text-teal-600',
    desc: 'خدمات إصلاح شاملة للثلاجات والمجمدات',
    services: [
      { icon: Thermometer, name: 'إصلاح مشكلة التبريد', desc: 'لا تبرد؟ نحلها' },
      { icon: Droplet, name: 'إصلاح تسرب الماء', desc: 'إيقاف التسرب بسرعة' },
      { icon: Zap, name: 'إصلاح الكمبروسر', desc: 'جميع أنواع الكمبروسر' },
      { icon: Settings, name: 'استبدال الترموستات', desc: 'ضبط دقيق للحرارة' },
      { icon: RefrigeratorIcon, name: 'إصلاح جوانة الباب', desc: 'منع تسرب الهواء البارد' },
      { icon: Sparkles, name: 'تنظيف الثلاجة', desc: 'تنظيف عميق وصحي' },
      { icon: Box, name: 'إصلاح الفريزر', desc: 'تجاري ومنزلي' },
      { icon: Wrench, name: 'إصلاح صانع الثلج', desc: 'جميع الموديلات' },
    ],
  },
  {
    id: 'washing',
    title: 'الغسالة',
    emoji: '🫧',
    color: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    textColor: 'text-violet-600',
    desc: 'إصلاح غسالات علوية وأمامية وجميع الماركات',
    services: [
      { icon: WashingMachine, name: 'إصلاح الحوض', desc: 'إصلاح الضوضاء والاهتزاز' },
      { icon: Droplet, name: 'إصلاح تسرب الماء', desc: 'إصلاح الأختام والخراطيم' },
      { icon: Zap, name: 'إصلاح الموتور', desc: 'جميع أنواع الموتور' },
      { icon: Settings, name: 'إصلاح لوحة التحكم', desc: 'الأعطال الإلكترونية' },
      { icon: Wrench, name: 'إصلاح مشكلة الدوران', desc: 'علوية وأمامية' },
      { icon: Droplets, name: 'مشكلة التصريف', desc: 'إصلاح المضخة والأنابيب' },
      { icon: Sparkles, name: 'تنظيف الغسالة', desc: 'تنظيف عميق للحوض' },
      { icon: AlertTriangle, name: 'إصلاح رموز الخطأ', desc: 'جميع رموز الخطأ' },
    ],
  },
  {
    id: 'other',
    title: 'أجهزة أخرى',
    emoji: '🔧',
    color: 'from-orange-500 to-amber-500',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    textColor: 'text-orange-600',
    desc: 'ميكروويف، فرن، غسالة أطباق والمزيد',
    services: [
      { icon: Microwave, name: 'إصلاح ميكروويف', desc: 'سريع وبأسعار مناسبة' },
      { icon: Flame, name: 'إصلاح فرن', desc: 'أفران غاز وكهرباء' },
      { icon: Utensils, name: 'إصلاح غسالة أطباق', desc: 'جميع الماركات' },
      { icon: Droplet, name: 'براد مياه', desc: 'إصلاح وصيانة' },
      { icon: Zap, name: 'إصلاح بوتاجاز كهربائي', desc: 'إصلاح الشعلات والتسخين' },
      { icon: Wind, name: 'إصلاح شفاط هواء', desc: 'مطبخ وحمام' },
      { icon: Settings, name: 'مكنسة كهربائية', desc: 'إصلاح الموتور والشفط' },
      { icon: Wrench, name: 'إصلاح سخان مياه', desc: 'غاز وكهرباء' },
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
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-right p-6 flex items-center gap-4"
      >
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-3xl shadow-lg shrink-0`}>
          {cat.emoji}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-extrabold text-[#1E293B]">{cat.title}</h3>
          <p className="text-slate-500 text-sm mt-0.5">{cat.desc}</p>
          <span className={`inline-block mt-2 text-xs font-semibold ${cat.textColor} ${cat.bg} px-2.5 py-1 rounded-full`}>
            {cat.services.length} خدمات
          </span>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`w-8 h-8 rounded-full ${cat.bg} flex items-center justify-center shrink-0`}
        >
          <ChevronDown className={`w-4 h-4 ${cat.textColor}`} />
        </motion.div>
      </button>

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
                احجز هذه الخدمة <ArrowRight className="w-4 h-4" />
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
            خدماتنا
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] mb-3">
            حلول إصلاح{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F4C81] to-[#14B8A6]">
              شاملة للأجهزة
            </span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            اضغط على أي فئة لعرض جميع الخدمات المتاحة
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
