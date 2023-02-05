myApp.controller("trainershowtrainerController", function($scope, $http) {


  if (sessionStorage.getItem("username") == "") {

    window.location = "#!/";
    alert("cannot view without loggin");
  }
  else {
    $scope.loadTrainer = () => {

      $http.get("/api/users/").then(function(result) {

        //data = (result);
        console.log(result);
        $scope.users = result.data;

      }).catch(function(result) {
        $scope.status = "Invalid Email/Password";

      })
    }
  }




})