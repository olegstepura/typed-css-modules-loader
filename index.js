var DtsCreator = require('typed-css-modules');

var creator = new DtsCreator();

module.exports = function(source, map) {
  this.cacheable && this.cacheable();
  var callback = this.async();
  
  // creator.create(..., source) tells the module to operate on the
  // source variable. Check API for more details.
  creator.create(this.resourcePath, source).then(content => {
    content.writeFile().then(_ => {
      callback(null, source, map);
    });
  });
};

