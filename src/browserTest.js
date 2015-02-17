
var browserTest = (function () {

  // Generic test functions

  var propertyExists = function (prop, obj) {
    try {
      return (typeof obj === 'object') && (prop in obj) && obj[prop] !== null;
    } catch (ex) {
      return false;
    }
  };

  var propertyExistsOnDummyElement = function (prop, element) {
    return !!document.createElement(element)[prop];
  };

  // Specific feature tests

  var canvasTest = function() {
    return propertyExistsOnDummyElement('getContext','canvas');
  };

  var formautofocusTest = function () {
    // return propertyExistsOnDummyElement('autofocus', 'input');
    return propertyExists('autofocus', document.createElement('input'));
  };

  var geolocationTest = function () {
    return propertyExists('geolocation', navigator);
  };

  var localStorageTest = function () {
    return propertyExists('localStorage', window);
  };

  var offlineTest = function () {
    return propertyExists('applicationCache', window);
  };

  var webworkersTest = function () {
    return propertyExists('Worker', window);
  };

  var videoTest = function () {
    return propertyExistsOnDummyElement('canPlayType', 'video');
  };

  // Public test methods
  function public () {
    this.canvas = canvasTest;
    this.formautofocus = formautofocusTest;
    this.geolocation = geolocationTest;
    this.localstorage = localStorageTest;
    this.offline = offlineTest;
    this.webworkers = webworkersTest;
    this.video = videoTest;
  }

  return new public();

}());
