import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, Clock, MapPin, Send, CheckCircle } from 'lucide-react'

const services = [
  'AC Repair', 'AC Installation', 'AC Maintenance', 'Gas Refilling',
  'Refrigerator Repair', 'Washing Machine Repair', 'Other',
]

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+966 50 000 0000', href: 'tel:+966500000000', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: Mail, label: 'Email', value: 'info@coolfix.sa', href: 'mailto:info@coolfix.sa', color: 'text-teal-600', bg: 'bg-teal-50' },
  { icon: Clock, label: 'Working Hours', value: 'Daily: 7AM – 11PM (24/7 Emergency)', href: null, color: 'text-green-600', bg: 'bg-green-50' },
  { icon: MapPin, label: 'Address', value: 'Riyadh, Saudi Arabia', href: null, color: 'text-red-500', bg: 'bg-red-50' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

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
            Contact Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] mb-4">
            Get In Touch{' '}
            <span className="text-[#0F4C81]">With Us</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Book a service, ask a question, or request an emergency repair. We're here 24/7.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map(({ icon: Icon, label, value, href, color, bg }) => (
              <div key={label} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-md transition-all">
                <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center shrink-0`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">{label}</div>
                  {href ? (
                    <a href={href} className={`font-semibold ${color} hover:underline`}>{value}</a>
                  ) : (
                    <div className="font-semibold text-[#1E293B]">{value}</div>
                  )}
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 h-48 bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center shadow-sm">
              <div className="text-center">
                <MapPin className="w-10 h-10 text-[#0F4C81] mx-auto mb-2 opacity-60" />
                <p className="text-gray-500 text-sm font-medium">Google Map — Riyadh, Saudi Arabia</p>
                <p className="text-gray-400 text-xs mt-1">Serving all major Saudi cities</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[#1E293B] mb-2">Request Submitted!</h3>
                  <p className="text-gray-500">We'll contact you within 30 minutes. Thank you!</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-[#0F4C81] font-semibold hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Full Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/30 focus:border-[#0F4C81] transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+966 5X XXX XXXX"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/30 focus:border-[#0F4C81] transition-colors text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/30 focus:border-[#0F4C81] transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="service">Service Required</label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/30 focus:border-[#0F4C81] transition-colors text-sm bg-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your issue..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/30 focus:border-[#0F4C81] transition-colors text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#0F4C81] to-[#2563EB] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                  >
                    <Send className="w-5 h-5" />
                    Book Service Now
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
