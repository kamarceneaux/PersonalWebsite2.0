import { BrowserRouter, Route, Routes } from "react-router";
import Landing from "./Components/Landing/Landing";
import "./App.css";
import Header from "./Components/Global/Header";
import About from "./Components/About/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
