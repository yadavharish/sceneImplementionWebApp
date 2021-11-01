app.controller('appController', ($scope, $http) => {
    $scope.showLR = () => {
        $scope.showDashboard = false;
        $scope.$broadcast('showLivingRoom', {});
    }

    $scope.showBR = () => {
        $scope.showDashboard = false;
        $scope.$broadcast('showBedroom', {});
    }

    $scope.showEC = () => {
        $scope.showDashboard = false;
        $scope.$broadcast('showEnvironmentController', {});
    }

    $scope.$on('showDashboard', () => {
        $scope.showDashboard = true;
    });
});