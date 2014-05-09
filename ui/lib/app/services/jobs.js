
var postsEndpoint = require('./posts-endpoint');

var pack = {};

pack.get = function () {
  return postsEndpoint.getCategory('jobs');
};

module.exports = pack;