const express = require('express')
const path = require('path')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('template engine', 'ejs')

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/:id', (req, res) => {
    // console.log(req.params)
    const items = {
        camisa: {
            id: 1,
            name: 'Camisa',
            category: 'Roupa',
            amount: 10,
            media: 15.56,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates dolorem aliquid quibusdam dolor suscipit deserunt mollitia! Animi error rem maxime aperiam dolores odio minus assumenda, asperiores suscipit ducimus aliquid. Assumenda repellendus quam veniam? Atque in omnis cum perspiciatis id hic aut reiciendis, esse illum corrupti nostrum maiores, temporibus quae cupiditate blanditiis doloribus eum sed! Molestiae perspiciatis totam sapiente cum.'
        },
        notebook: {
            id: 1283,
            name: 'Notebook',
            category: 'Tecnologia',
            amount: 25,
            media: 1300.56,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates dolorem aliquid quibusdam dolor suscipit deserunt mollitia! Animi error rem maxime aperiam dolores odio minus assumenda, asperiores suscipit ducimus aliquid. Assumenda repellendus quam veniam? Atque in omnis cum perspiciatis id hic aut reiciendis, esse illum corrupti nostrum maiores, temporibus quae cupiditate blanditiis doloribus eum sed! Molestiae perspiciatis totam sapiente cum.'
        }
    }
    res.render('product.ejs', { produto: })
    if (req.params.id !== '1') res.render('product.ejs', { produto: notebook })
    else res.render('product.ejs', { produto: camisa })
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log('Backend is runnning on port ' + port))