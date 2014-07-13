'use strict';

angular.module('genericChromeMdApp')
  .controller('MainCtrl', function ($scope, $timeout, $materialSidenav) {
    var leftNav;
    $timeout(function() {
      leftNav = $materialSidenav('left');
    });
    $scope.toggleLeft = function() {
      leftNav.toggle();
    };
  })
  .controller('LeftCtrl', function($scope, $timeout, $materialSidenav) {
  var nav;
  $timeout(function() {
    nav = $materialSidenav('left');
  });
  $scope.close = function() {
    nav.close();
  };
})
  ;
