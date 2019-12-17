const express = require('express');
const router = express.Router();
const tagData = require('../data/tags');
const fakePosts = require('../data/posts');

router.get('/', (req, res) => {
    res.json(tagData);
});

router.get('/:tagId/posts', (req, res) => {
    const tagIdparam = Number(req.params.tagId, 10);
    res.send(fakePosts.filter(x => x.tagId === tagIdparam));


})

module.exports = router