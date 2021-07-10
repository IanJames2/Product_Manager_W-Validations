const express = require('express');
const cors = require('cors') 
const mongoose = require('mongoose');
const port = 8000;
const app = express();
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({extended: true})); //this is new

  

require("./server/config/person.config")
require("./server/routes/person.routes")(app)






app.listen(port, () => console.log(`Listening on port: ${port}`) );
