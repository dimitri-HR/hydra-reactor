angular.module('listViewModule', ['hydraApp']).controller('activityController', ['$scope', '$http', 'User', function($scope, $http, User) {
  $scope.userData = User.userData;
  $scope.newActivity = User.newActivity;
  $scope.currentTrip = User.currentTrip;
}]);
