import React, { useState, useEffect} from "react";
import './App.css'
import Hotel from "./components/hotel";
import LoadingMask from "./components/loadingmask";

const App = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/api/hotels")
      .then((response) => response.json())
      .then((json) => setData(json))
  }, [])
  console.log(data);
if (data === "") {
  return (
    <LoadingMask/>
  )
} else {

  return (
    <div className="App">
      <h1>Hotels</h1>
      <Hotel data={data}/>

    </div>
  )
}
}

export default App
