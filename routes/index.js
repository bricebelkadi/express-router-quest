const express = require('express');
const posts = require('./post');
const tags = require('./tags')

const router = express.Router();

router.use('/post', posts);
router.use('/tags', tags)

module.exports = router;