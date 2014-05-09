
var postsEndpoint = require('./posts-endpoint');

var pack = {};

pack.get = function () {
  return postsEndpoint.getCategory('projects');
};

module.exports = pack;