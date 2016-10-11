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
        templateUrl: 'app/template/home.template.html',
        controller: 'homeCtrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
