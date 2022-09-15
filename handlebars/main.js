const express = require('express')
const handlebars = require("express-handlebars")
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    layout: __dirname + '/views/layouts'
}))

app.set('views', './views')
app.set('view engine', 'hbs')

const productos = []

app.get('/', (req,res) => {
    res.render('main', {
        layout: 'index',
        title: 'Title',
        price: 'Price',
        img: 'Image URL'
    })
})

app.get('/productos', (req,res) => {
    res.render('main', { 
        layout: 'table',
        productos: productos
    })
})

app.post('/productos', (req, res) => {
    const { title, price, img } = req.body
    const id = productos.length + 1
    productos.push({ title, price, img, id })

    res.render('main', { 
        layout: 'table',
        productos: productos
    })
})



app.listen(8080)