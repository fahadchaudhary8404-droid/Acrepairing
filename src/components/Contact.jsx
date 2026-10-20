import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, Clock, MapPin } from 'lucide-react'


const contactInfo = [
  { icon: Phone, label: 'الهاتف', value: '966581829201+', href: 'tel:+966581829201', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: Mail, label: 'البريد الإلكتروني', value: 'summarhayat77@gmail.com', href: 'mailto:summarhayat77@gmail.com', color: 'text-teal-600', bg: 'bg-teal-50' },
  { icon: Clock, label: 'ساعات العمل', value: 'يومياً: 7 صباحاً – 11 مساءً (طوارئ 24/7)', href: null, color: 'text-green-600', bg: 'bg-green-50' },
  { icon: MapPin, label: 'العنوان', value: 'التبريد وتكييف — بلال بن رباح، طويق، الرياض 14523', href: 'https://maps.google.com/?q=24.5796883,46.5557807', color: 'text-red-500', bg: 'bg-red-50' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0F4C81] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            تواصل معنا
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] mb-4">
            تواصل{' '}
            <span className="text-[#0F4C81]">معنا الآن</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            احجز خدمة أو اطرح سؤالاً أو اطلب إصلاحاً طارئاً. نحن هنا 24/7.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {contactInfo.map(({ icon: Icon, label, value, href, color, bg }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center gap-3 p-5 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all text-center border border-gray-100"
            >
              <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center shrink-0`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">{label}</div>
                {href ? (
                  <a href={href} className={`font-semibold text-sm ${color} hover:underline`}>{value}</a>
                ) : (
                  <div className="font-semibold text-sm text-[#1E293B]">{value}</div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Width Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden border border-gray-200 shadow-2xl"
        >
          <iframe
            title="موقع التبريد وتكييف"
            src="https://maps.google.com/maps?q=24.5796883,46.5557807&z=16&output=embed"
            width="100%"
            height="500"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href="https://maps.google.com/?q=24.5796883,46.5557807"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 bg-white hover:bg-blue-50 transition-colors border-t border-gray-100 group"
          >
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#0F4C81]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-[#0F4C81]">التبريد وتكييف</p>
              <p className="text-xs text-gray-400">بلال بن رباح، طويق، الرياض 14523</p>
            </div>
            <span className="text-sm text-[#0F4C81] font-semibold group-hover:underline whitespace-nowrap">فتح الخريطة ←</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
