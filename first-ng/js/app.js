console.log('meow');

(function() {
'use strict';

angular.module('myApp', [])
  .controller('MainController', function() {
    var vm = this;
    vm.title = 'AngularJS, the Superheroic MVW Framework';
    vm.names = ['Meow', 'Cat', 'Boots', 'Doge', 'Trash Bird'];
    vm.extraNames = ['Cate', 'Bird', 'Raccoon', 'Confession Bear'];

    vm.showNames = true;

    vm.addName = function() {
      if (vm.extraNames.length) vm.names.push(vm.extraNames.shift());
    };
  });





})();
