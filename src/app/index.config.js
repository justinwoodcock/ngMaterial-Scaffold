export function config ($logProvider, $mdThemingProvider, $locationProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  $locationProvider.html5Mode(true);

  $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .accentPalette('indigo');
}
