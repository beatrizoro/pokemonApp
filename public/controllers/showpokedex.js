myApp.controller("showpokedexController", function($scope, $http) {
  $scope.loadPokemon = () => {

    $http.get("/api/pokemons/").then(function(result) {
      
     //data = (result);
     console.log(result);
      $scope.pokemons = result.data;
     
    }).catch(function(result) {
      $scope.status = "Something went wrong";

    })
  };




  
})