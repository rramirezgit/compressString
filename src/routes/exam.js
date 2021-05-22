const express = require('express');
const process = require('../controller/process');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {});
});



router.post('/', (req, res) => {
    const { int, str } = req.body
    if (int == "" && str == "") {
        res.render('index', {
            error: "Campos Incompletos"
        })
    } else {

        res.render('index', process(req.body))
      
          
    }
});


router.post('/about', (req, res) => {
    res.render('about');
});

module.exports = router;
