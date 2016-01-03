(function() {
  'use strict';

  angular
    .module('surveyTestApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
