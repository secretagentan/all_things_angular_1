angular.module("IntroAngular")
  .controller("CarController", CarController)

function CarController() {
  var vm = this;
  vm.test = "Hello World";

  vm.car = {
    Make: "Toyota",
    Model: "Tacoma"
  }

  vm.cars = [
    {
      Make: 'Tardis',
      Model: 'Type 40'
    },
    {
      Make: 'Millennium Falcon',
      Model: 'YT-1300f light freighter'
    },
    {
      Make: 'Batmobile',
      Model: 'Tumbler'
    }
  ]

}
