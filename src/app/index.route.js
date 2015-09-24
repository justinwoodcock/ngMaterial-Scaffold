export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('login', {
      url: '/login',
      views: {
        sidenav: {
          templateUrl: 'app/components/sidenav/sidenav.html',
          controller: 'SidenavController'
        },
        header: {
          templateUrl: 'app/components/header/header.html',
          controller: 'HeaderController'
        },
        main: {
          templateUrl: 'app/login/login.html',
          controller: 'LoginController'
        }
      }
    });

  $urlRouterProvider.otherwise('/login');
}
