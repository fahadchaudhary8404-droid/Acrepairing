import { Phone, Mail, MapPin } from 'lucide-react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import logo from '/logo.png'

const services = [
  'إصلاح مكيف سبليت', 'إصلاح مكيف مركزي', 'تركيب مكيفات',
  'صيانة مكيفات', 'تعبئة غاز', 'إصلاح ثلاجة',
  'إصلاح غسالة', 'إصلاح طارئ',
]

const quickLinks = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'من نحن', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'لماذا نحن', href: '#why-us' },
  { label: 'آراء العملاء', href: '#testimonials' },
  { label: 'تواصل معنا', href: '#contact' },
]

const socials = [
  { icon: FaFacebook, href: '#', label: 'Facebook' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0F1B2D] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company */}
          <div>
            <div className="flex items-center mb-5">
              <img src={logo} alt="التبريد وتكييف الرياض" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-sm leading-relaxed mb-5">
              الشركة الأكثر ثقةً في المملكة العربية السعودية لإصلاح المكيفات والأجهزة المنزلية. فنيون معتمدون، قطع غيار أصلية، ضمان 90 يوماً.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label} href={href} aria-label={label}
                  className="w-9 h-9 bg-white/5 hover:bg-[#0F4C81] rounded-xl flex items-center justify-center transition-colors border border-white/10"
                >
                  <Icon className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-5 text-base">خدماتنا</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm hover:text-[#14B8A6] transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#14B8A6] rounded-full" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-5 text-base">روابط سريعة</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm hover:text-[#14B8A6] transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#14B8A6] rounded-full" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-5 text-base">معلومات التواصل</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#14B8A6] mt-0.5 shrink-0" />
                <div>
                  <a href="tel:+966581829201" className="text-sm text-white hover:text-[#14B8A6] transition-colors font-medium">
                    966581829201+
                  </a>
                  <div className="text-xs text-gray-500">خط الطوارئ 24/7</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#14B8A6] mt-0.5 shrink-0" />
                <a href="mailto:summarhayat77@gmail.com" className="text-sm hover:text-[#14B8A6] transition-colors">
                  summarhayat77@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#14B8A6] mt-0.5 shrink-0" />
                <a
                  href="https://maps.google.com/?q=24.5796883,46.5557807"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-[#14B8A6] transition-colors leading-snug"
                >
                  التبريد وتكييف<br />
                  بلال بن رباح، طويق<br />
                  الرياض 14523
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-4 h-4 text-[#14B8A6] mt-0.5 shrink-0 text-base">🕐</span>
                <span className="text-sm">يومياً: 7 صباحاً – 11 مساءً</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} التبريد وتكييف الرياض. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-[#14B8A6] transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-[#14B8A6] transition-colors">شروط الخدمة</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
