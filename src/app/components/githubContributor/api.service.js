(function() {
  'use strict';

  angular
    .module('surveyTestApp')
    .factory('apiService', apiService);

  /** @ngInject */
  function apiService() {
    var apiHost = 'https://api.github.com/repos/sergiy-talashko/survey_test_app/contents';

    var service = {
      apiHost: apiHost
    };

    return service;

  }
})();
