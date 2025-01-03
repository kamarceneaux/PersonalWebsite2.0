import { BrowserRouter, Route, Routes } from "react-router";
import Landing from "./Components/Landing/Landing";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
