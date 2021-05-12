import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

import Home from "./components/sections/home";
import About from "./components/sections/about";
import Skills from "./components/sections/skills";
import Experience from "./components/sections/experience";
import Projects from "./components/sections/projects";
import Contact from "./components/sections/contact";

import Links from "./datastore/links.json";

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Home id={Links[0].link} />
        <About id={Links[1].link} />
        <Projects id={Links[2].link} />
        <Skills id={Links[3].link} />
        <Experience id={Links[4].link} />
        <Contact id={Links[5].link} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
