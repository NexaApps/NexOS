"use strict";

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', function () {
  var replaceText = function replaceText(selector, text) {
    var element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (var _i = 0, _arr = ['chrome', 'node', 'electron']; _i < _arr.length; _i++) {
    var type = _arr[_i];
    replaceText("".concat(type, "-version"), process.versions[type]);
  }
});