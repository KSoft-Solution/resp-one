const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const lusca = require("lusca");
const cookieParser = require("cookie-parser");

const app = express();

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use(helmet.frameguard({ action: "DENY" }));
app.use(cors());

app.use("/", (req, res) => {
  res.status(200).json({
    message: "working fine",
  });
});

module.exports = app;
