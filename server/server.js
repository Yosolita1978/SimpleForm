const express = require('express');
const cors = require('cors');
require('dotenv').config();
const dataWeather = require("./data")

const app = express();

const PORT = 8082;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route /api
app.get('/', (req, res) => {
    res.json({ message: 'Hello from My template ExpressJS' });
  });

// creates an endpoint for the route /weather
app.get('/weather/', (req, res) => {
  const city = req.query.cityName;
  console.log("this is comming from the server", city);
  //TO_DO: here will go the API request! 
  
  // optional - closing the request

  res.sendStatus(200).end()
  //res.send({data})
})


// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });