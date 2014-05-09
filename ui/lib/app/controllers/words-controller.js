
var words = require('../services/words');
var PostController = require('../classes/post-controller');

new PostController('WordsController', words)
  .inject();
