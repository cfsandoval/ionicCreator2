angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('inicio', {
    url: '/page1',
    templateUrl: 'templates/inicio.html',
    controller: 'inicioCtrl'
  })

  .state('aplicacion', {
    url: '/aplicacion',
    templateUrl: 'templates/aplicacion.html',
    controller: 'aplicacionCtrl'
  })

  .state('graficos', {
    url: '/graficos',
    templateUrl: 'templates/graficos.html',
    controller: 'graficosCtrl'
  })

  .state('criterio2', {
    url: '/criterio2',
    templateUrl: 'templates/criterio2.html',
    controller: 'criterio2Ctrl'
  })

$urlRouterProvider.otherwise('/page1')


});