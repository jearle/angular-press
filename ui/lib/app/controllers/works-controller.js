
var works = require('../services/works');
var PostController = require('../classes/post-controller');

new PostController('WorksController', works)
  .inject();
