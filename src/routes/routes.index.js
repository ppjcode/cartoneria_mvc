const router = require('express').Router();


router.get('/',(req,res) => {
    res.render('index');
})

router.get('/productos', (req, res) => {
    // realize connection to mysql
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM product', (err, products) => {
            if (err) {
                res.json(err);
            }
            res.render('productos', {
                data: products
            });
        });
    });
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