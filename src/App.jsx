import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
export default function App() {
  return (<>
    <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:bg-accent focus:p-2 focus:text-ink">Skip to content</a>
    <Navbar /><main><Hero /><About /><Skills /><Projects /><Experience /><Education /><Services /><Contact /></main><Footer />
  </>)
}
