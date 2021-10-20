const products = require('./data/products')
const express = require('express')
const path = require('path')
const app = express()


// middlewares
app.set('views', path.join(__dirname, 'views'))
app.set('template engine', 'ejs')
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.render('index.ejs', { products })
})

app.get('/:id', (req, res) => {
    const pid = +req.params.id // string para int
    const id = pid >= 1 && pid <= 20 ? pid : 1 // id padrão é 1
    const product = products.filter(x => x.id === id )[0]// se nao houver id vai para o primeiro
    res.render('product.ejs', { product })
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log('Backend is runnning on port ' + port))