import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import axios from "axios";
import { useState, useEffect } from "react";

function App(){
  const [message, setMessage] = useState("");
  useEffect(() => {
    //call the backend APi
    axios.get("/api/road")
    .then(response => setMessage(response.data))
    .catch(error => console.error("Error is:", error))
  })
  return (
    <div className="main">
      <Nav />
      <Hero />
      <p>{message}</p>
      <h3>Building RoadmpasAi</h3>
    </div>
  )
}

export default App;