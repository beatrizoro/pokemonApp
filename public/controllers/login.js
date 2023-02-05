myApp.controller("loginController", function($scope, $http) {

  $scope.status = "";

  $scope.login = function(email, password) {

    const user = { email: email, password: password };

    $http.post("/api/users/login", user).then(function(result) {
     // console.log(result);
      
      sessionStorage.setItem("username", result.data.Name);
      sessionStorage.setItem("useremail", result.data.Email);
      sessionStorage.setItem("userid", result.data._id);
      
      window.location = "#!/trainerview";
    }).catch(function(result) {
      $scope.status = "Invalid Email/Password";

    })

  }
});  