
var projects = require('../services/projects');
var PostController = require('../classes/post-controller');

new PostController('ProjectsController', projects)
  .inject();

