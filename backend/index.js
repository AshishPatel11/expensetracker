const { connectToMongo } = require('./db');
const express = require('express')
const app = express()

const axios = require("axios");
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

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            { username: username, secret: username, first_name: username },
            { headers: { "PRIVATE-KEY": "26cc43bd-be58-4f17-a027-334e5b840cbb" } }
        );
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }
});

//Defining the API endpoint path fron all routes
app.use('/api', require('./routes/user'));
app.use('/api', require('./routes/expenses'));
app.use('/api', require('./routes/reminder'));
app.use('/api', require('./routes/table'));


//starting the server on the port with use of Express
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
