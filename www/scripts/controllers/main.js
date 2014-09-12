'use strict';

angular.module('genericChromeMdApp')
  .controller('MainCtrl', function ($scope, $timeout, $materialSidenav,
    $materialToast, $animate, $materialDialog) {
    $scope.toggleMenu = function() {
      $timeout(function() {
        $materialSidenav('left').toggle();
      });
    };

    $scope.toastIt = function() {
      $materialToast({
        template: '<material-toast>Hello!</material-toast>',
        duration: 3000
      });
    };

    $scope.dialog = function(e) {
      $materialDialog({
        templateUrl: 'views/dialog.html',
        targetEvent: e,
        controller: ['$scope', '$hideDialog', function($scope, $hideDialog) {
          $scope.close = function() {
            $hideDialog();
          };
        }]
      });
    };


    $scope.selectedIndex = 0;
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
  .controller('ToastCtrl', function($scope, $hideToast) {
    $scope.closeToast = function() {
      $hideToast();
    };
  })
  .directive('ig', function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        fid: '@'
      },
      template: '<div class="material-input-group">' +
                  '<label for="{{fid}}">Description</label>' +
                  '<input id="{{fid}}" type="text" ng-model="data.description">' +
                '</div>',
    }
  })
  ;
