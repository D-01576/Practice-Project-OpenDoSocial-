const express = require("express");
const cors = require("cors");
const {Auth} = require("./routes/auth/auth");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", Auth)

app.listen(3000)