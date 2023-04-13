import express from 'express';
import cors from 'cors'

import type { AddressInfo } from 'net';
const app = express();

app.use(cors({
  origin: "*"
}))
app.use(express.json())

app.get('/', function (req, res) {
  console.log("hello")
  res.end();
});

app.post('/api/login', async function (req, res) {
  const {username, password} = req.body
  if (username === "bumblebee" && password === "IloveHon3y"){
    res.status(200).send({ authenticated: true });
  } else {
    res.status(403).send({error: "unauthorized"})
  }
});

app.post("/api/order", async function (req, res) {
  const { product, amount } = req.body;
  res.status(200).send({status: "order successful"})
});

// Listen on port 8080
const listener = app.listen(8080, function () {
  console.log('Listening on port ' + (listener.address() as AddressInfo).port);
});