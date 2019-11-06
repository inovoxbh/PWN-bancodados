const express = require('express');
const router = express.Router();
const Products = require('../store/Products');
const Comment = require('../store/Comment');

/* GET detalhes produto. */
router.get('/:pid', function(req, res) {
    Products.getById(req.params.pid)
        .then(function(products) {
            /* implementar aqui a busca pelos comentários */     
            res.render('details', { products });
        })
});

router.post('/', function(req, res) {
    Comment.create({
        identification : 1,
        author : 'bruno',
        commet : 'teste'
    })
    .then(() => console.log('registrado com sucesso.'));
});

module.exports = router;
