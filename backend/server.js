const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const { PORT } = require("./config/configENV");
const connectDB = require("./config/db");
const mainRouter = require("./routes/mainRoutes");

const app = express();
app.use(express.json());
app.use(cors());

const SERVER_PORT = PORT;

// ConnectDB
connectDB();

app.get("/", (req, res) => {
  res.send("WELCOME TO MOLXIPI API!");
});

// API
app.use(mainRouter);

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});
