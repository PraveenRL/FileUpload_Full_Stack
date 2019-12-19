const express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    path = require('path'),
    bodyParser = require('body-parser'),
    dbConfig = require('./database/db');

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
}).then(() => {
    console.log('Database Connected')
}, error => {
    console.log("Database Could Not Be Connected" + error);
})

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
})


const port = process.env.PORT | 4000;
app.listen(port, () => {
    console.log('Port running in ' + port);
})

const userRoute = require('./public/user.route')
app.use('/api', userRoute);

app.use('/public', express.static('public'))