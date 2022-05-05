const express = require("express");
const connectDb = require("./config/connectDb");
const ContactRoutes = require("./routes/contact");
const app = express();
require('dotenv').config();
connectDb();

app.use(express.json());

app.use("/api/contact", ContactRoutes);

app.listen(process.env.port, () => console.log(`port is running on port ${process.env.port}`));