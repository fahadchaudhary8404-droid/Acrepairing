import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import WhatsAppButton from './components/WhatsAppButton'
import BackToTop from './components/BackToTop'

function ScrollProgress() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement
      const scrollTop = el.scrollTop || document.body.scrollTop
      const scrollHeight = el.scrollHeight - el.clientHeight
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
      setWidth(progress)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <div id="scroll-progress" style={{ width: `${width}%` }} />
}

export default function App() {
  return (
    <Router>
      <ScrollProgress />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <WhatsAppButton />
      <BackToTop />
    </Router>
  )
}
