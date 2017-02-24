(function() {
  "use strict";

  angular
    .module('ThePresidentsApp')
    .controller('PresidentsController', PresidentsController);

  PresidentsController.$inject = ['$http'];

  function PresidentsController($http){
    var vm = this;
    vm.all = [];
    // vm.all = [
    //   {"name": "Blorp Florp McRichards", "start": 1789, "end": 1790 },
    //   {"name": "John MuscleBrain Adams", "start": 1790, "end": 1801 },
    //   {"name": "Blogpost Dorgabn", "start": 1801, "end": 1949 },
    //   {"name": "Mike", "start": 1949, "end": 1947 }
    // ];
    vm.addPresident = addPresident;
    vm.newPresident = {};

    getPresidents();
    function getPresidents() {
      $http
      .get('/api/presidents')
      .then(function(response){
        console.log(response);
        vm.all = response.data.presidents;
      }, function(err) {
        console.log(err);
      });
    }

    function addPresident() {
      $http
      .post('/api/presidents', vm.newPresident)
      .then(function(response) {
        console.log(vm.newPresident);
        console.log(response);
        vm.all.push(response.data.president);
        vm.newPresident = {};
      }, function(err) {
        console.log(err);
      });
    }

    function deletePresident(rmPres) {
      var id = rmPres._id;
      console.log(id);
      $http
      .delete(`/api/presidents/${id}`)
      .then(function(response) {
      }, function(err) {
        console.log(err);
      });
    }
  }
})();
