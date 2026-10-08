const express = require("express");
const { applyCoupons } = require("./cart");

const app = express();

app.use(express.json());

app.post("/checkout", (request, response) => {
  const { price, coupons } = request.body;
  response.json({ total: applyCoupons(price, coupons) });
});

module.exports = { app };
