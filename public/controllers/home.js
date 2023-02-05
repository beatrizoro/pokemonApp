myApp.controller("homeController", function($scope, $http) {
 // console.log(sessionStorage.getItem("username"));
  //reset strorage
   sessionStorage.setItem("username", "");
      sessionStorage.setItem("useremail", "");
  sessionStorage.setItem("userid", "");
        //console.log(sessionStorage.getItem("username"));
})