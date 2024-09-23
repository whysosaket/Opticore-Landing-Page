import { About } from "./components/About/About"
import Form from "./components/Form"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar"
import Strategy from "./components/Strategy"
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
      <Strategy />
      <Form />
    </div>
  )
}

export default App
