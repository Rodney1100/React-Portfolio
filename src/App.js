import "./App.css";
import About from "./components/AboutMe";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div>
      <header>
        <Header></Header>
        <Nav></Nav>
      </header>
      <main>
        <About></About>
        <Resume></Resume>
        <Portfolio></Portfolio>
        <ContactForm></ContactForm>
      </main>
      <footer>
        {/* <Footer></Footer> */}
      </footer>
    </div>
  );
}

export default App;
