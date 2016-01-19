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
    function link($scope, $elem, COUNTRY_ARRAY) {

      //console.log($scope.message.message);

      var inputData = $scope.message.input,
          inputName = $scope.message.name,
          inputTemplate,
          element;

      switch (inputData.type){
        case "email":
        case "text":
          inputTemplate = "<input  ng-model='main.answers["+$scope.$index+"]'"+
          " type='"+inputData.type+"'" +
          (inputName ? " name='main."+inputName+"'" : "") +
          (inputData.minlength && Number.isInteger(inputData.minlength) ? " ng-minlength='"+inputData.minlength+"' minlength='"+inputData.minlength+"'" : "") +
          (inputData.maxlength && Number.isInteger(inputData.maxlength)? " ng-maxlength='"+inputData.maxlength+"' maxlength='"+inputData.maxlength+"'" : "") +
          (inputData.pattern ? " pattern=\""+inputData.pattern+"\"" : "") +
          (inputData.required ? " required" : "") +
          " >";
          break;

        case "select":
          inputTemplate = "<input  ng-model='main.answers["+$scope.$index+"]'"+
          " type='"+inputData.type+"'" +
          (inputName ? " name='main."+inputName+"'" : "") +
          (inputData.minlength && Number.isInteger(inputData.minlength) ? " ng-minlength='"+inputData.minlength+"' minlength='"+inputData.minlength+"'" : "") +
          (inputData.maxlength && Number.isInteger(inputData.maxlength)? " ng-maxlength='"+inputData.maxlength+"' maxlength='"+inputData.maxlength+"'" : "") +
          (inputData.pattern ? " pattern=\""+inputData.pattern+"\"" : "") +
          (inputData.required ? " required" : "") +
          " >";
          break;

      }

      element = angular.element("<div>" + $scope.message.message.replace("____", inputTemplate) + "</div>");
      $elem.replaceWith(element);
      $compile(element)($scope);

    }
  }

})();
