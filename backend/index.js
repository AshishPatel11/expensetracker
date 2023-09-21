const { connectToMongo } = require('./db');
const express = require('express')
const app = express()
const port = 5000

//mongoDB connection function
connectToMongo();

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/api', require('./router/user'));

//starting the server on the port with use of Express
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
