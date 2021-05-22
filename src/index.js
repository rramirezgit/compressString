require('dotenv').config({ path: './.env' });
const express = require('express');
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const path = require('path');
const config = require('./config');

// Initializations
const app = express();

// settings: configuraciones
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Middlewares: ejecutas antes de que lleguen al servidor
app.use(express.urlencoded({
  extended: true
}));

//Routes
app.use(require('./routes/exam'));

app.listen(config.api.port, () => { console.log(`server runnig on port ${config.api.port}`) })