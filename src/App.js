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

function App() {
  return (
    <>
      <NavigationBar />
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
      </Routes>
    </>
  );
}

export default App;
