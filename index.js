const express = require('express');

const bodyParser = require('body-parser');

const path = require('path');

const routes = require('./routes/index')



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);
app.use(express.static(path.join(__dirname, 'dist')));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');




app.listen(3000, function () {

    console.log('Example app listening on port 3000!');
});