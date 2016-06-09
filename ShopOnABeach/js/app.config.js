require('angular');
require('angular-route');
require('angular-ui-router');
global.jQuery = require('jquery');
require('bootstrap');
global._ = require('underscore');

require('./app');
require('./services/_index');
require('./controllers/_index');