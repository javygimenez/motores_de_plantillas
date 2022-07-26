const { Router } = require('express');

const router = Router();

let productos = [];

router.get('/', (req, res) => {
    res.render('form', { productos });
});

router.get('/productos', (req, res) => {
    res.render('listaProdu', { productos });
});

router.post('/productos', (req, res) => {
    productos.push(req.body);
    res.render('form', { productos });
});

module.exports = router;