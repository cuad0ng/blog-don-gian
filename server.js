const express = require('express')
const hbs = require('express-handlebars')
const {formatRelative}= require('date-fns')
const router = require('./routers')

const app = express()
const port = 5000

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'))

//template engine
app.engine('hbs', hbs.engine({
    extname: '.hbs',
    helpers: {
        format_date: (date) => formatRelative(date, new Date())
    }
}));
app.set('view engine', 'hbs');
app.set('views', './views');

router(app)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})