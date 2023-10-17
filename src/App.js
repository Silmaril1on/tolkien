import "./App.scss";
import NavigationBar from "./layout/navigation/NavigationBar";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/home/Home";
import Lotr from "./pages/movies/lordOfTheRings/Lotr";
import Hobbit from "./pages/movies/hobbit/Hobbit";
import RingsOfPower from "./pages/movies/ringsOfPower/RingsOfPower";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lotr" element={<Lotr />} />
        <Route path="/hobbit" element={<Hobbit />} />
        <Route path="/ringsofpower" element={<RingsOfPower />} />
      </Routes>
    </>
  );
}

export default App;
