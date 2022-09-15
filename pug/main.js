const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// * pug implementado
app.set("views", "./views");
app.set("view engine", "pug");

const productos = []

app.get('/', (req, res) => {
    res.render("formulario")
})

app.get('/productos', (req, res) => {
    res.render("productos", { productos })
})

app.post('/productos', (req, res) => {
    const { title, price, img } = req.body
    const id = productos.length + 1
    productos.push({ title, price, img, id })

    res.render('productos', { productos })
})

app.listen(8080);