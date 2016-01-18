(function() {
  'use strict';

  angular
    .module('surveyTestApp')
    .directive('messages', messages);

  /** @ngInject */
  function messages($compile) {

    var directive = {
      restrict: 'A',
      compile: function CompilingFunction() {
        return link;
      }
    };

    return directive;

    /** @ngInject */
    function link($scope, $elem) {

      console.log($scope.message.message);
      var text = $scope.message.message.replace("____",
        "<input type='text' ng-model='"+$scope.message.name+
        "' pattern='"+$scope.message.input.pattern+
        "'>");


      $elem.replaceWith($compile('<div>'+text+'</div>')($scope));
    }
  }

})();
