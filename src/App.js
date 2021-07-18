import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import AboutMe from "./components/AboutMe"
import CareerObj from "./components/CareerObj";
import Work from "./components/Work";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <a name="AboutMe"><AboutMe /></a>
      <CareerObj />
      <a name="Work"><Work /></a>
    </>

  );
}

export default App;
