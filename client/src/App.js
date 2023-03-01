import './App.css';
import { useState } from "react";
import WeatherForm from './components/weatherForm';
import Message from './components/message';


function App() {

  const [city, setCity] = useState("");
  // const [result, setResult] = useState(null);

 // build a function that send city to the backend

 const sendCity = (city) =>{
  const params = new URLSearchParams({cityName: city})
  //console.log(params);
  const URL = `http://localhost:8082/weather?${params}`
  fetch(URL)
  .then((response) => response.json)
  .then((result) => {
    console.log(result);
  })
 }

 const userInputCity= (city) =>{
  setCity(city);
  //console.log(city);
  sendCity(city);
 }


  return (
    <div className="App">
      <WeatherForm city={city} userInputCity={userInputCity}/>
      {!city ? null :<Message city={city} />}

    </div>
  );
}

export default App;
