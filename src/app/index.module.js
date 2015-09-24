/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import HeaderController from '../app/components/header/header.controller';
import LoginController from './login/login.controller';
import SidenavController from '../app/components/sidenav/sidenav.controller';

angular.module('chris', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ngMaterial'])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('HeaderController', HeaderController)
  .controller('LoginController', LoginController)
  .controller('SidenavController', SidenavController)
