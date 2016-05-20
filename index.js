var DtsCreator = require('typed-css-modules');

var creator = new DtsCreator();

module.exports = function(input, map) {
  this.cacheable && this.cacheable();
  var callback = this.async();
  creator.create(this.resourcePath).then(content => {
    content.writeFile().then(_ => {
      callback(null, input, map);
    });
  });
};
