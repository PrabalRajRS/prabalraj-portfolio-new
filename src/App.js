import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'
import ResumeModal from './components/Modal/ResumeModal'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, [])

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />
      {
        !isModalOpen ?
          <div>
            <main>
              <About />
              <Projects />
              <Skills />
              <Contact />
            </main>
            <ScrollToTop />
            <Footer />
          </div>
          :
          <ResumeModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      }


    </div>
  )
}

export default App
