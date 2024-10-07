const exp = require("express");
const dotenv = require("dotenv");

const app = exp();
dotenv.config();
const port = process.env.PORT || 1415;

app.listen(port, () => console.log("server up and runing on port " + port));
