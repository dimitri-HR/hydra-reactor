angular.module('loginSplash', ['ngRoute', 'loginModule', 'signupModule', 'hydraApp', 'tripViewModule', 'listViewModule', 'tripCreatorModule'])

.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/login', {
    templateUrl: 'login/login.html',
    controller: 'loginController'
  })
  .when('/signup', {
    templateUrl: 'signup/signup.html',
    controller: 'signupController'
  })
  .when('/listview', {
    templateUrl: 'listview/listview.html',
    controller: 'activityController'
  })
  .when('/tripview', {
    templateUrl: 'tripview/tripview.html',
    controller: 'tripViewController'
  })
  .when('/tripcreator', {
    templateUrl: 'tripcreator/tripCreator.html',
    controller: 'tripCreatorController'
  })
  .otherwise({
    redirectTo: '/login'
  });

  $locationProvider.hashPrefix('');
});
