class HeaderController {
  constructor ($scope, $timeout, $log, $state, $mdSidenav, $mdDialog) {
    'ngInject';
    $scope.toggleNav = function(navId) {
      $mdSidenav(navId).toggle();
    };
    $scope.openNotifications = function($mdOpenMenu, $event) {
      $mdOpenMenu($event);
    }
    $scope.openUserMenu = function($mdOpenMenu, $event) {
      $mdOpenMenu($event);
    }
    $scope.logoutUser = function() {
      $log.debug('logoutUser()');
    };
  }
}

export default HeaderController;


