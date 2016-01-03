(function() {
  'use strict';

  angular
    .module('surveyTestApp')
    .factory('apiService', apiService);

  /** @ngInject */
  function apiService(Restangular, $q) {

    var dataRestangular = Restangular.one('master/api-data.json');

    var service = {
      getData: getData
    };

    return service;

    function getData(){
      return dataRestangular.get().then(function(resp){
        console.log(resp);
        return resp.data;
      }).catch(function(){
        alert('something wrong');
        return $q.reject();
      });
    }

  }
})();
