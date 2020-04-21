const router = require('express').Router();

router.get('/',(req,res) => res.render('index'))

router.get('/productos', (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM product', (err, products) => {
            if (err) res.json(err)
            res.render('productos', {data: products});
        });
    });
})

router.get('/nosotros', (req, res) => res.render('nosotros'))

router.get('/contacto', (req, res) => res.render('contacto'))

router.get('/login', (req, res) => res.render('login'))

router.post('/user/signup',(req, res) => {
    const {user, password } = req.body;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM users', (err, users) => {
            if(err) res.json(err)
            
            const userDB = users[0]

            if (userDB.user === user && userDB.password === password) {
                res.render('user/signup', {usuario: userDB.user})
            }else{
                res.redirect('/login')
            }
        })
    })
})


module.exports = router;