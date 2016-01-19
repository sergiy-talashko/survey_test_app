(function() {
  'use strict';

  angular
    .module('surveyTestApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(apiService, COUNTRY_ARRAY) {
    var vm = this;
    vm.changeStage = changeStage;
    vm.finishStage = finishStage;
    vm.countries = COUNTRY_ARRAY;
    vm.finished = false;

    init();

    function init() {
      apiService.getData().then(function(data){
        console.log(data);
        vm.surveyData = data;
        vm.activeIndex = 0;
        changeStage(vm.activeIndex);
      });
    }

    function changeStage(index) {
      vm.activeStage = vm.surveyData.stages[index];
      vm.answers = new Array(vm.activeStage.messages.length);
    }

    function finishStage() {
      console.log(vm.answers);
      if (vm.activeIndex === vm.surveyData.stages.length - 1){
        vm.finished = true;
      }else{
        changeStage(++vm.activeIndex);
      }
    }


  }
})();
