const express = require('express'),
      router = express.Router();
      products = require('../models/productos.json')



// My Custom Routes

router.get('/',(req,res) => {
    res.render('index');
    // res.send('hello');
})

router.get('/productos', (req, res) => {
    res.render('productos', {products});
    
})

router.get('/nosotros', (req, res) => {
    res.render('nosotros');
})

router.get('/contacto', (req, res) => {
    res.render('contacto');
})

router.get('/login', (req, res) => {
    res.render('login');
})





module.exports = router;