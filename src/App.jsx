import { useState } from "react";
import "./App.css";
import Landing from "./Components/Landing/Landing";

function App() {
  const [modalOpen, modalClose] = useState(false);

  return (
    <>
      <Landing />
    </>
  );
}

export default App;
