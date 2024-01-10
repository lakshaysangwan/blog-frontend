var app = angular.module("myApp", ["ngRoute"]);

app.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "pages/home/home.html",
        controller: "HomeController",
      })
      .when("/about", {
        templateUrl: "pages/about/about.html",
        controller: "AboutController",
      })
      .when("/signin", {
        templateUrl: "pages/signin/signin.html",
        controller: "SigninController",
      })
      .when("/signup", {
        templateUrl: "pages/signup/signup.html",
        controller: "SignupController",
      })
      .otherwise({
        redirectTo: "/",
      });
  },
]);

document
  .getElementById("dark-mode-toggle")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    const icon = this.querySelector("i");
    if (document.body.classList.contains("dark-mode")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  });
