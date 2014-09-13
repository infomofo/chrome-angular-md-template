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

        $scope.todos = [
      {
        face : '/img/list/60.jpeg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : '/img/list/60.jpeg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : '/img/list/60.jpeg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : '/img/list/60.jpeg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : '/img/list/60.jpeg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
    ];

      $scope.data = {
    group1 : '2',
    group2 : '6'
  };
  
  $scope.data.cb1 = true;
  $scope.data.cb2 = false;

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
    template: 
      '<material-input-group>' +
        '<label for="{{fid}}">Description</label>' +
        '<material-input id="{{fid}}" type="text" ng-model="data.description">' +
      '</material-input-group>'
  };
});