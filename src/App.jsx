import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { LinksSection } from './components/LinksSection'
import { links, trialOffer } from './config/links'
import './App.css'

function App() {
  return (
    <div className="page">
      <Hero links={links} offer={trialOffer} />
      <main>
        <LinksSection links={links} />
      </main>
      <Footer />
    </div>
  )
}

export default App
