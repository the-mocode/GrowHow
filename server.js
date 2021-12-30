const path = require('path');
const express = require("express");
const app = express();
const axios = require('axios');
const env = require('dotenv')
env.config()

const port = process.env.PORT || 3001; // Note: using a different port to normal

app.use(express.static("./client/build"));

const handler = (req, res) => res.sendFile(path.join(__dirname, "./client/build/index.html"))

const route = ["/"]

route.forEach( rout => app.get(rout, handler) ) 

app.use(express.json());

// const path = __dirname + 'client/build';

app.get("/", (req, res) => {
  res.sendFile(path + 'index.html');
});



app.get("/api/test", (req, res) => {
  res.json({ result: "success" });
});

app.post("/identify", (req, res) => {
  
  const data = {
  api_key: process.env.REACT_APP_API_KEY,
  images: 'hello',
  modifiers: ["crops_fast", "similar_images"],
  plant_language: "en",
  /* plant details info: https://github.com/flowerchecker/Plant-id-API/wiki/Plant-details */
  plant_details: ["common_names",
      "url",
      "name_authority",
      "wiki_description",
      "taxonomy",
      "synonyms"]
  };
  
  console.log(req.body)

  // axios.post('https://api.plant.id/v2/identify', data).then(response => {
  // console.log('Success:', response.data);
  // res.json(response.data)
  // }).catch(error => {
  // console.error('Error: ', error)
  // })
  // res.json(
  //   'hello'
  // )
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});