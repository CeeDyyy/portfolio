import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import AboutMe from "./components/AboutMe"
import Extra from "./components/Extra";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <a name="Home"><Home /></a>
      <a name="AboutMe"><AboutMe /></a>
      <Extra />
      <a name="Portfolio"><Portfolio /></a>
      <a name="Contact"><Contact /></a>
    </>

  );
}

export default App;
