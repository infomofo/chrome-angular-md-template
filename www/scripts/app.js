'use strict';

angular.module('genericChromeMdApp',['ngMaterial', 'ngRoute']).
  run(function() {
    FastClick.attach(document.body);
  });
