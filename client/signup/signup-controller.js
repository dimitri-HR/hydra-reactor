//currently using controller in app.js
angular.module('signupModule', []).controller('signupController', ['$scope', '$http', 'User', function($scope, $http, User) {
  $scope.email = '';
  $scope.password = '';
  $scope.newSignUp = User.newSignUp;
  $scope.go = User.go;
}]);

// angular.module('signupModule', [])

// .controller('signupController', function($scope, $http) {

// })
