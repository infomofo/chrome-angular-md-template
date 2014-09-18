'use strict';

angular.module('genericChromeMdApp',['ngMaterial']).
  run(function() {
    FastClick.attach(document.body);
  });
