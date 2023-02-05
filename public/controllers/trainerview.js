myApp.controller("trainerviewController", function($scope, $http) {


  if (sessionStorage.getItem("username") == "")
  {
 
       window.location = "#!/";
       alert("cannot view without loggin");  
  }
  else
  {
     $scope.username = sessionStorage.getItem("username");
   var pokemonname = $scope.name;
        $scope.loadUserPokemon = () => {

    $http.get("/api/users/"+sessionStorage.getItem("userid")).then(function(result) {
      
     data = (result);
     console.log(result);
       $scope.users = result.data.Teams;
   
    }).catch(function(result) {
     

    })
  }
$scope.removePokemon = (id) => {
          $http.get(`/api/pokemons/${id}`).then(function(pokeresult) {
          console.log(pokeresult.data);
        
            
            $http.patch(`/api/users/remove/`+sessionStorage.getItem("userid"),pokeresult.data).then(function(userresult) {

          alert(pokeresult.data.Name + "has been removed");
                $http.get("/api/users/"+sessionStorage.getItem("userid")).then(function(result) {
      
     data = (result);
     console.log(result);
       $scope.users = result.data.Teams;
   
    }).catch(function(result) {
     

    })
            }).catch(function(usererror) {
              alert(usererror);
            })
            
          }).catch(function(error) {
            alert(error);
          })





  
        }






    
  }
})