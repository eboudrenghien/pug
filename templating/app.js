const express = require ('express')
const path = require ('path')
// const pug = require ('pug')
const app = express ()

// app.set('views', path.join(__dirname, 'views'));

app.set('view engine','pug')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    // res.set('Content-Type', 'text/plain');
    res.render('index.pug')
})

app.listen(3000,() => {
    console.log('le serveur démarre sur le port http://localhost:3000');

})