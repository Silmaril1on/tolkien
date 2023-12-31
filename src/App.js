import "./App.scss";
import NavigationBar from "./layout/navigation/NavigationBar";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/home/Home";
import Lotr from "./pages/movies/lordOfTheRings/Lotr";
import Hobbit from "./pages/movies/hobbit/Hobbit";
import RingsOfPower from "./pages/movies/ringsOfPower/RingsOfPower";
import Tolkien from "./pages/creators/tolkien/Tolkien";
import Jackson from "./pages/creators/jackson/Jackson";
import Elves from "./pages/races/elves/Elves";
import Valars from "./pages/races/valars/Valars";
import Creatures from "./pages/races/creatures/Creatures";
import Gandalf from "./pages/pagecharacters/Gandalf";
import Angmar from "./pages/pagecharacters/Angmar";
import Sauron from "./pages/pagecharacters/Sauron";
import Galadriel from "./pages/pagecharacters/Galadriel";
import Saruman from "./pages/pagecharacters/Saruman";
import Aragorn from "./pages/pagecharacters/Aragorn";
import ScrollTop from "./components/ScrollTop";
import Footer from "./layout/footer/Footer";

function App() {
  return (
    <>
      <NavigationBar />
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lotr" element={<Lotr />} />
        <Route path="/hobbit" element={<Hobbit />} />
        <Route path="/ringsofpower" element={<RingsOfPower />} />
        <Route path="/tolkien" element={<Tolkien />} />
        <Route path="/peterjackson" element={<Jackson />} />
        <Route path="/elves" element={<Elves />} />
        <Route path="/valars" element={<Valars />} />
        <Route path="/creatures" element={<Creatures />} />
        <Route path="/gandalf" element={<Gandalf />} />
        <Route path="/angmar" element={<Angmar />} />
        <Route path="/sauron" element={<Sauron />} />
        <Route path="/galadriel" element={<Galadriel />} />
        <Route path="/saruman" element={<Saruman />} />
        <Route path="/aragorn" element={<Aragorn />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
