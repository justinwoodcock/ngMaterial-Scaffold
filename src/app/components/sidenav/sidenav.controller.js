class SidenavController {
  constructor ($scope, $timeout, $mdSidenav) {
    'ngInject';
    $scope.navItems = [
      {
        title: 'Dashboard',
        sub: 'View and edit your profile.',
        link: 'dashboard'
      },
      {
        title: 'Profile',
        sub: 'View your profile.',
        link: 'profile'
      }
    ];
    $scope.toggleNav = function(navId) {
      $mdSidenav(navId).toggle();
    };
  }
}

export default SidenavController;
