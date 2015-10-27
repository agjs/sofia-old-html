angular.module('sofia', ['ui.router'])


.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/home.html",
      controller: 'sofiaController'
    })

    .state('question_1', {
      url: "/question_1",
      templateUrl: "partials/question_1.html",
      controller: 'sofiaController'
    })

      .state('question_2', {
          url: "/question_2",
          templateUrl: "partials/question_2.html",
          controller: 'sofiaController'
      })

      .state('question_3', {
          url: "/question_3",
          templateUrl: "partials/question_3.html",
          controller: 'sofiaController'
      })


      .state('question_4', {
          url: "/question_4",
          templateUrl: "partials/question_4.html",
          controller: 'sofiaController'
      })


      .state('question_5', {
          url: "/question_5",
          templateUrl: "partials/question_5.html",
          controller: 'sofiaController'
      })

      .state('question_6', {
          url: "/question_6",
          templateUrl: "partials/question_6.html",
          controller: 'sofiaController'
      })

      .state('question_7', {
          url: "/question_7",
          templateUrl: "partials/question_7.html",
          controller: 'sofiaController'
      })


      .state('question_8', {
          url: "/question_8",
          templateUrl: "partials/question_8.html",
          controller: 'sofiaController'
      })

      .state('question_9', {
          url: "/question_9",
          templateUrl: "partials/question_9.html",
          controller: 'sofiaController'
      })

      .state('question_10', {
          url: "/question_10",
          templateUrl: "partials/question_10.html",
          controller: 'sofiaController'
      })

      .state('question_11', {
          url: "/question_11",
          templateUrl: "partials/question_11.html",
          controller: 'sofiaController'
      })


      .state('question_12', {
          url: "/question_12",
          templateUrl: "partials/question_12.html",
          controller: 'sofiaController'
      })


      .state('question_13', {
          url: "/question_13",
          templateUrl: "partials/question_13.html",
          controller: 'sofiaController'
      })

      .state('question_14', {
          url: "/question_14",
          templateUrl: "partials/question_14.html",
          controller: 'sofiaController'
      })

      .state('question_15', {
          url: "/question_15",
          templateUrl: "partials/question_15.html",
          controller: 'sofiaController'
      })


      .state('question_16', {
          url: "/question_16",
          templateUrl: "partials/question_16.html",
          controller: 'sofiaController'
      })

      .state('question_17', {
          url: "/question_17",
          templateUrl: "partials/question_17.html",
          controller: 'sofiaController'
      })

      .state('question_18', {
          url: "/question_18",
          templateUrl: "partials/question_18.html",
          controller: 'sofiaController'
      })

      .state('question_19', {
          url: "/question_19",
          templateUrl: "partials/question_19.html",
          controller: 'sofiaController'
      })

      .state('done', {
          url: "/thanks",
          templateUrl: "partials/thanks.html",
          controller: 'sofiaController'
      })

    })



.controller('sofiaController', function($scope){


$scope.welcome = 'Welcome to Sofia';
        $scope.subtitle = 'Click to get started';






});