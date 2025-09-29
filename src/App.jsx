import Header from "./components/Header/index";
import Intro from "./components/Intro/index";
import About from "./components/About/index";
import Skills from "./components/Skills/index";
import Projects from "./components/Projects/index";
import VerticalTimeline from "./components/Timeline/index";
import Contact from "./components/Contact/index";
import ContactsSidebar from "./components/Contacts_sidebar";
import Footer from "./components/Footer/index";
import { ThemeProvider } from "./components/Context";

const App = () => {
  return (
    <ThemeProvider>
    <>
      <Header />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <VerticalTimeline />
      <Contact />
      <ContactsSidebar/>
      <Footer />
    </>
    </ThemeProvider>
  );
};

export default App;
