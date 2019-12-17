const express = require('express');
const router = express.Router({ mergeParams: true });
const fakeComments = require('../data/comments');


// Get a list of comments
router.get('/', (req, res) => {
  res.json(fakeComments.filter(x => x.post_id === Number(req.params.postId,10)));
});



module.exports = router;  