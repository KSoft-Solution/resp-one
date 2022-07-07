const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const lusca = require("lusca");
const cookieParser = require("cookie-parser");

const app = express();

//setting all middleware
app.enable("trust proxy");
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());
app.use(compression());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,PATCH,POST,DELETE");
  res.header("Access-Control-Expose-Headers", "Content-Length");
  res.header(
    "Access-Control-Allow-Headers",
    "Accept, Authorization,x-auth-token, Content-Type, X-Requested-With, Range"
  );
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  } else {
    return next();
  }
});

app.use(helmet.frameguard({ action: "DENY" }));
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
app.use(cors());

app.use("/", (req, res) => {
  res.status(200).json({
    message: "working fine from api end",
  });
});

module.exports = app;
