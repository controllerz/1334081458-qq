(function() {
  'use strict';

  angular
    .module('2')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/template/home.complate.html',
        controller: 'MainController'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
