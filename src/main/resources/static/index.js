angular.module('app', []).controller('indexPageController', function ($scope, $http) {
    const contextPath = 'http://localhost:8189/products/api/v1/'

    $scope.page = 0;

    $scope.filltable = function (page) {
        $http.get(contextPath + '?page=' + page)
            .then(function (response) {
                $scope.ProductList = response.data.products;
                $scope.TotalPages = response.data.totalPages;
                $scope.CurrentPage = response.data.currentPage;
                console.log(response);
            });
    };


    $scope.removeProductById = function (id) {
      $http.delete(contextPath + parseInt(id))
          .then(function (reloadPage) {
              $scope.filltable($scope.page);
          }
      )};

    $scope.filltable($scope.page);
});