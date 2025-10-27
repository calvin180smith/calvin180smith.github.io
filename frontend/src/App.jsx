import { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Platforms from "./components/Platforms";
import Services from "./components/Services";
import Contact from "./components/Contact";
function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-up"
    );
    elements.forEach((el) => observer.observe(el));

    // Optional cleanup
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div>
      <Header />
      <Main />
      <About />
      <Services />
      <Platforms />
      <Contact />
    </div>
  );
}

export default App;
