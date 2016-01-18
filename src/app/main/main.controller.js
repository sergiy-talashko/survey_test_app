(function() {
  'use strict';

  angular
    .module('surveyTestApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(apiService) {
    var vm = this;
    vm.changeStage = changeStage;
    vm.test = test;

    init();

    function init() {
      apiService.getData().then(function(data){
        console.log(data);
        vm.surveyData = data;
        changeStage(0);
      });
    }

    function changeStage(index) {
      vm.activeStage = vm.surveyData.stages[index];
      console.log(vm.activeStage);
    }


    function test(index) {
      console.log(vm.test2);
    }

  }
})();
