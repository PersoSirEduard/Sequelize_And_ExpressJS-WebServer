const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./database');
const seqModels = require('./models/models');
const routes = require("./routes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    return res.send({message: "Welcome to the API!"});
});

app.post("/create", routes.user.createUser);


app.listen(3000, () => { // Start app on port 3000
    console.log("Express server is running.");
});