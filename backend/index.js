const { connectToMongo } = require('./db');
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 5000

//mongoDB connection function
connectToMongo();


app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json()); //to parse the json data from the HTTP req

//Allowing permission to access the API calls by the frontend
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Defining the API endpoint path fron all routes
app.use('/api', require('./routes/user'));
app.use('/api', require('./routes/expenses'));
app.use('/api', require('./routes/reminder'));
app.use('/api', require('./routes/ExpHistory'));


//starting the server on the port with use of Express
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
