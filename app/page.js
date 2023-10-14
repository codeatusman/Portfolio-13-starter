import Navbar from '@/components/Navbar/Navbar'
import Header from '@/components/Header/Header'
import About from '@/components/About/About'
import Skills from '@/components/Skills/Skills'
import Work from '@/components/Work/Work'
import Testimonial from '@/components/Testimonial/Testimonial'
import Contact from '@/components/Contact/Contact'

const page = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Work/>
      <Testimonial/>
      <Contact/>
    </main>
  )
}

export default page