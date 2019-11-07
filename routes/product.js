const express = require('express');
const router = express.Router();
const Products = require('../store/Products');
const Comment = require('../store/Comment');

/* GET detalhes produto. */
router.get('/:pid', function(req, res) {
    Products.getById(req.params.pid)
    .then(function(product) {
        /* busca dos comentários já incluídos anteriormente */     
        Comment.find({
            identification : req.params.pid
        })
        .then(comments => res.render('details', {product:product[0],comments}))
    })
});

router.post('/', function(req, res) {
    /* gravar o comentário */
    Comment.create({
        identification : req.body.prodid,
        author : req.body.name,
        comment : req.body.comment
    })
    .then(() => res.send("Comentário incluído com sucesso!"))
});

module.exports = router;
