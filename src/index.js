const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')
const mysql = require('mysql')
const bodyParser =require('body-parser')

const app = express()

app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', handlebars.engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine','.hbs')
app.set(bodyParser.json())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}));

app.use(require('./routes/index'))

app.listen(app.get('port'), () => {
    console.log('Server on PORT ', app.get('port'))
})