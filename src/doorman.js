// Name: doorman.js
// Description: This is the main module

var doorman = (function () {

  var public = function () {
    this.isValid = true;
  };

  return Object.create(new public());

})();