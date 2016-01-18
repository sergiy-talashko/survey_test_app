(function() {
  'use strict';

  angular
    .module('surveyTestApp')
    .config(toastrConfig)
    .config(RestangularProviderConfig)
    .config(localStorageConfig);

  /** @ngInject */
  function toastrConfig($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

  function RestangularProviderConfig(RestangularProvider, API_URL) {
    RestangularProvider
      .setBaseUrl(API_URL);
  }

  function localStorageConfig(localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('surveyTestApp');
  }

})();
