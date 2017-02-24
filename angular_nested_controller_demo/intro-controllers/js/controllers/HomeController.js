angular.module("IntroAngular")
  .controller("HomeController", HomeController)

function HomeController() {
  var vm = this;
  vm.test = "Goodbye World";
  vm.count = 1;

  vm.counter = function() {
    vm.count++;
  }
}
