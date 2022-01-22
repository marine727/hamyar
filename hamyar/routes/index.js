const express = require('express');
require('app-module-path').addPath(__dirname);
const router = express.Router();
const controller = require('../src/controller');


router.get('/', (req, res) => {
    res.render('index', {
        title: 'هرمز طب',
        style:
        [
            'bootstrap.css',
            'fontawesome-all.css',
            'swiper.css',
            'magnific-popup.css',
            'styles.css',
            'globals.css'
        ]
    });

})

router.get('/fulltextsearch', async(req, res) => {
    const reqData = req.body; 
    const args = {txt: reqData.txt? reqData.txt:"", page: reqData.page? reqData.page*1 : 1 , limit: reqData.limit ? reqData.limit*1: 20};
    
    var data = await  controller.fulltextSearch(args);

    var jsonResponse = {};

    jsonResponse.result = data;

    res.send(jsonResponse);
})




module.exports = router;