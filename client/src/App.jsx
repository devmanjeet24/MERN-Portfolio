import Layout from "./Components/Layout/Layout"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Education from "./Pages/Education/Education"
import Projects from "./Pages/Projects/Projects"
import Techstack from "./Pages/Techstack/Techstack"
import Workexp from "./Pages/WorkExp/work"
import ScrollToTop from "react-scroll-to-top";
import useTheme from "./Context/Usetheme"
import Mobilenav from "./Components/MobileNav/Mobilenav"


function App() {

  const { Theme } = useTheme();


  return (
    <>
      <div id={Theme}>
        <Mobilenav />
        <Layout />

        <div className="container">
          <About />
          <Techstack />
          <Projects />
          <Education />
          <Workexp />
          <Contact />
        </div>
      </div>
      <div className="footer mb-3 ms-3">
        <h4 className="text-center">Made with 😎 Manjeet Singh &copy; 2025</h4>
      </div>
      <ScrollToTop smooth color="#f29f67" style={{ backgroundColor: "#1e1e2c", borderRadius: "50%", }} />
    </>


  )
}

export default App
