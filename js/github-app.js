/*
    github-app.js
    very quick and dirty github API demo

    To get all your repos on GitHub, GET this URL:
        https://api.github.com/users/your-github-username/repos
 */


angular.module('GitHubApp', [])
    .controller('GitHubController', function($scope, $http) {
        $scope.userName = 'drstearns';
        $scope.getRepos = function() {

            $http.get('https://api.github.com/users/' + $scope.userName + '/repos')
                .success(function(data) {
                    $scope.repos = data;
                    $scope.errorMessage =null;
                 })
                .error(function(err) {
                    //alert ("user doesn't exist!")
                    $scope.errorMessage = err.message || 'User doesn not exist!';
                 })
            .finally(function() {
                $scope.loading = false;
                 });
        };
    });