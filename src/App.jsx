import { useState, useEffect } from "react";
import { Nav, Home, About, Skills, Projects, Contact } from "./Components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const arrOfGradients = [
    "bg-gradient-to-r from-[#6ec4c7] to-[#C8A2C8]",
    "bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]",
    "bg-gradient-to-r from-[#11998e] to-[#38ef7d]",
    "bg-gradient-to-r from-[#2c3e50] to-[#4ca1af]",
    "bg-gradient-to-r from-[#434343] to-[#6d597a]",
    "bg-gradient-to-r from-[#92dcde] to-[#6ec4c7]",
    "bg-gradient-to-r from-[#232526] to-[#414345]",
     "bg-gradient-to-r from-[#232526] to-[#414345]",
     "bg-gradient-to-r from-[#000] to-[#34d399]",
    
  ];
  const [gradient, setGradient] = useState(arrOfGradients[0]);
  const randomBg = () => {
    const randomNumbers = Math.floor(Math.random() * arrOfGradients.length);
    console.log(arrOfGradients[randomNumbers]);
    setGradient(arrOfGradients[randomNumbers]);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      randomBg();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const [tabs, setTab] = useState([
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
  ]);
  const [currentElement, setCurrentElement] = useState(0);
  const handleChangeTabs = (id) => {
    //just change the current element to the id
    setCurrentElement(id);
  };
  return (
    <>
      <ToastContainer autoClose={3000} hideProgressBar={false} closeOnClick newestOnTop={false} />
      <Nav
        tabs={tabs}
        currentElement={currentElement}
        handleChangeTabs={handleChangeTabs}
      />
      <main>
        <Home currentElement={currentElement} gradient={gradient} />
        <About
          currentElement={currentElement}
          gradient={gradient}
          handleChangeTabs={handleChangeTabs}
        />
        <Skills currentElement={currentElement} />
        <Projects currentElement={currentElement} />
        <Contact currentElement={currentElement} />
      </main>
    </>
  );
};

export default App;
