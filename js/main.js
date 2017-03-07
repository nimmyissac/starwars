var module = angular.module("moduleMain",[]);
module.controller("Display", display);
function display($scope) {
  $scope.names = ["A New Hope", "The Empire Strikes Back", "Return of the Jedi", "The Phantom Menace", "Attack of the Clones", "Revenge of the Sith", "The Force Awakens", "The Last Jedi"];
}