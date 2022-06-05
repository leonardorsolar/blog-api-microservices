const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

// implementar o endpoint para observar os eventos de entrada
app.post("/events", (req, res) => {
  // obter o evento que é o corpo da solicitação
  // pode ser um onjeto json, string , numero...
  // pegaremos e enviaremos para todos diferentes serviços em execução
  const event = req.body;

  axios.post("http://localhost:4000/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:4001/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:4002/events", event).catch((err) => {
    console.log(err.message);
  });
  res.send({ status: "OK" });
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
