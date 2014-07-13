'use strict';

angular.module('genericChromeMdApp')
  .controller('MainCtrl', function ($scope, $timeout, $materialSidenav) {
    $scope.toggleMenu = function() {
      $timeout(function() {
        $materialSidenav('left').toggle();
      });
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
