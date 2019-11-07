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
        identification : req.body.prodid,
        author : req.body.name,
        comment : req.body.comment
    })
    .then(() => res.send("Comentário incluído com sucesso!"))
});

module.exports = router;
