import { Phone, Mail, MapPin } from 'lucide-react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import logo from '../assets/WhatsApp Image 2026-08-01 at 8.44.14 PM.png'

const services = [
  'Split AC Repair', 'Central AC Repair', 'AC Installation',
  'AC Maintenance', 'Gas Refilling', 'Refrigerator Repair',
  'Washing Machine', 'Emergency Repair',
]

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
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
              <img src={logo} alt="CoolFix Pro" className="h-14 w-auto object-contain" />
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Saudi Arabia's most trusted AC & home appliance repair company. Certified technicians,
              original parts, 90-day warranty.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white/5 hover:bg-[#0F4C81] rounded-xl flex items-center justify-center transition-colors border border-white/10"
                >
                  <Icon className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-5 text-base">Our Services</h4>
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
            <h4 className="text-white font-bold mb-5 text-base">Quick Links</h4>
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
            <h4 className="text-white font-bold mb-5 text-base">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#14B8A6] mt-0.5 shrink-0" />
                <div>
                  <a href="tel:+966500000000" className="text-sm text-white hover:text-[#14B8A6] transition-colors font-medium">
                    +966 50 000 0000
                  </a>
                  <div className="text-xs text-gray-500">24/7 Emergency Line</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#14B8A6] mt-0.5 shrink-0" />
                <a href="mailto:info@coolfix.sa" className="text-sm hover:text-[#14B8A6] transition-colors">
                  info@coolfix.sa
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#14B8A6] mt-0.5 shrink-0" />
                <span className="text-sm">Riyadh, Saudi Arabia</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-4 h-4 text-[#14B8A6] mt-0.5 shrink-0 text-base">🕐</span>
                <span className="text-sm">Daily: 7AM – 11PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} CoolFix Pro. All rights reserved. Saudi Arabia.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-[#14B8A6] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#14B8A6] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
