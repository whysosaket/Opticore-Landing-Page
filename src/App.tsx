import { About } from "./components/About/About"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar"
import Work from "./components/Work/Work"


function App() {

  return (
    <div className="font-inter">
      <Navbar />
      <Hero />
      <div className="px-4">
        <About />
      </div>
      <Work />
      <h1 className="font-inter">Hello World</h1>
    </div>
  )
}

export default App
