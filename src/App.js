import React, { useState } from "react";
import "./App.css";
import About from "./components/AboutMe";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import ContactForm from "./components/ContactForm";
// import Footer from "./components/Footer";

function App() {

  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <header>
        <Header></Header>
        <Nav>
          {/* contactSelected = {contactSelected}
          setContactSelected={setContactSelected} */}
        </Nav>
      </header>
      <main>
        <About></About>
        <Resume></Resume>
        <Portfolio></Portfolio>
        <ContactForm></ContactForm>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
