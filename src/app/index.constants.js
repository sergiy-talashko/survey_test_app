/* global moment:false */
(function() {
  'use strict';

  angular
    .module('surveyTestApp')
    .constant('moment', moment)
    .constant('API_URL', "https://raw.githubusercontent.com/sergiy-talashko/survey_test_app/");

})();
