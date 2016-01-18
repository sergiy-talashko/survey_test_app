(function() {
  'use strict';

  angular
    .module('surveyTestApp')
    .config(routeConfig);

  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state("main", {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    });

    $urlRouterProvider.otherwise('/');
  }

})();
