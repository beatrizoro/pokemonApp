myApp.controller("trainershowpokedexController", function($scope, $http) {


  if (sessionStorage.getItem("username") == "") {

    window.location = "#!/";
    alert("cannot view without loggin");
  }
  else {
    $scope.loadPokemon = () => {

      $http.get("/api/pokemons/").then(function(result) {

        //data = (result);
        console.log(result);
        $scope.pokemons = result.data;

      }).catch(function(result) {
        $scope.status = "Something went wrong";

      })
    }

    var userid = sessionStorage.getItem("userid");


$scope.addPokemon = (id) => {
          $http.get(`/api/pokemons/${id}`).then(function(result) {
          console.log(result.data);

            
            $http.patch(`/api/users/`+userid,result.data).then(function(userresult) {
          alert(result.data.Name + "has been added");
              
            }).catch(function(error) {
              alert(error.data.message);
            })
            
          }).catch(function(error) {
            alert(error.data.message);
          })





  
        }


    
  }
})