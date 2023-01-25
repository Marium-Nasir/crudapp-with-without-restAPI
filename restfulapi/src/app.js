const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 4000;
const router = require("./router/route");
require("./db/connection");

app.use(express.json());
app.use([router]);

app.listen(port , () => {
    console.log(`our server is running ${port}`);
})