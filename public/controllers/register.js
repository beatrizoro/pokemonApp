myApp.controller("registerController", function($scope, $http) {
  
  $scope.status = "";
   $scope.Register = function(name,email, password,age) {

    const user = { Name: name, Email: email, Password: password, Age:age };

    $http.post("/api/users/register", user).then(function(result) {
      console.log(result);
      window.location = "#!/login";
    }).catch(function(result) {
      $scope.status = "Email already in use";

    })

  }
})