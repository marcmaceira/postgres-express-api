const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const app = express();
const port = 3001;
const db = require("./queries");

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

require("./routes")(app, db);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});

module.exports = app;
