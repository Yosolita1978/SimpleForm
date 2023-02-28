import { useState } from "react";

const WeatherForm = (props) =>{

  const [city, setCity] = useState("");

  const onChange = (ev) =>{
    setCity(ev.target.value);
  }

  //hint = Make the submit an function in the parent and control the info in the parent
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(city);
  };


    return (
        <div className="weather">
        <h1 className="App-header">Techtonica City App</h1>
        <form onSubmit={handleSubmit}>
          <input
            id="city-name"
            type="text"
            placeholder="Please enter the city name"
            name="city"
            value={city}
            onChange={onChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
}

export default WeatherForm;