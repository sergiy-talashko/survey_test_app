(function() {
  'use strict';

  angular
    .module('surveyTestApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(apiService) {
    var vm = this;

    init();

    function init() {
      apiService.getData().then(function(data){
        console.log(data);
      });
    }

  }
})();
