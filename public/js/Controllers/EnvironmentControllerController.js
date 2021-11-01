app.controller('EnvironmentControllerController', ($scope, $http) => {
    $scope.$on('showEnvironmentController', () => {
        $scope.showEnvirnomentController = true;
        $scope.getEnvironmentStatus();
    });

    $scope.closeEC = () => {
        $scope.$emit('showDashboard', {});
        $scope.showEnvirnomentController = false;
    }

    $scope.getEnvironmentStatus = () => {
        $http({
            method: "GET",
            url: "/EnvironmentController/GetStatus"
        }).then(res => {
            $scope.envCtrlHours = res.data.time[0];
            $scope.envCtrlMinutes = res.data.time[1];
            $scope.envCtrlDN = res.data.isNightTime == 0 ? "Day" : "Night";
            $scope.envCtrlD = res.data.date[0];
            $scope.envCtrlM = res.data.date[1];
            $scope.envCtrlY = res.data.date[2];
            $scope.envCtrlSeason = res.data.season;
            $scope.envCtrlTemp = res.data.temperature;
            $scope.envCtrlNPLA = res.data.personsInLivingRoomLivingArea;
            $scope.envCtrlNPDA = res.data.personsInLivingRoomDiningArea;
        }); 
    }

    $scope.increaseTemperature = () => {
        $http({
            method: "GET",
            url: "/EnvironmentController/IncreaseTemperature"
        }).then(res => {
            $scope.envCtrlTemp = res.data.temperature;
        }); 
    }

    $scope.decreaseTemperature = () => {
        $http({
            method: "GET",
            url: "/EnvironmentController/DecreaseTemperature"
        }).then(res => {
            $scope.envCtrlTemp = res.data.temperature;
        }); 
    }

    $scope.increaseHours = () => {
        $http({
            method: "GET",
            url: "/EnvironmentController/IncreaseHours"
        }).then(res => {
            $scope.envCtrlD = res.data.date[0];
            $scope.envCtrlM = res.data.date[1];
            $scope.envCtrlY = res.data.date[2];
            $scope.envCtrlSeason = res.data.season;
            $scope.envCtrlHours = res.data.time[0];
            $scope.envCtrlDN = res.data.isNightTime == 0 ? "Day" : "Night";
            $scope.envCtrlTemp = res.data.temperature;
        }); 
    }

    $scope.decreaseHours = () => {
        $http({
            method: "GET",
            url: "/EnvironmentController/DecreaseHours"
        }).then(res => {
            $scope.envCtrlD = res.data.date[0];
            $scope.envCtrlM = res.data.date[1];
            $scope.envCtrlY = res.data.date[2];
            $scope.envCtrlSeason = res.data.season;
            $scope.envCtrlHours = res.data.time[0];
            $scope.envCtrlDN = res.data.isNightTime == 0 ? "Day" : "Night";
            $scope.envCtrlTemp = res.data.temperature;
        }); 
    }

    $scope.changeDayNight = () => {
        $http({
            method: "GET",
            url: "/EnvironmentController/ChangeDayNight"
        }).then(res => {
            $scope.envCtrlD = res.data.date[0];
            $scope.envCtrlM = res.data.date[1];
            $scope.envCtrlY = res.data.date[2];
            $scope.envCtrlSeason = res.data.season;
            $scope.envCtrlHours = res.data.time[0];
            $scope.envCtrlDN = res.data.isNightTime == 0 ? "Day" : "Night";
            $scope.envCtrlTemp = res.data.temperature;
        }); 
    }

    $scope.increaseMonth = () => {
        $http({
            method: "GET",
            url: "/EnvironmentController/IncreaseMonth"
        }).then(res => {
            $scope.envCtrlD = res.data.date[0];
            $scope.envCtrlM = res.data.date[1];
            $scope.envCtrlY = res.data.date[2];
            $scope.envCtrlSeason = res.data.season;
            $scope.envCtrlHours = res.data.time[0];
            $scope.envCtrlDN = res.data.isNightTime == 0 ? "Day" : "Night";
            $scope.envCtrlTemp = res.data.temperature;
        }); 
    }

    $scope.decreaseMonth = () => {
        console.log("Hey")
        $http({
            method: "GET",
            url: "/EnvironmentController/DecreaseMonth"
        }).then(res => {
            $scope.envCtrlD = res.data.date[0];
            $scope.envCtrlM = res.data.date[1];
            $scope.envCtrlY = res.data.date[2];
            $scope.envCtrlSeason = res.data.season;
            $scope.envCtrlHours = res.data.time[0];
            $scope.envCtrlDN = res.data.isNightTime == 0 ? "Day" : "Night";
            $scope.envCtrlTemp = res.data.temperature;
        }); 
    }

    $scope.changeSeason = () => {
        $http({
            method: "GET",
            url: "/EnvironmentController/ChangeSeason"
        }).then(res => {
            $scope.envCtrlD = res.data.date[0];
            $scope.envCtrlM = res.data.date[1];
            $scope.envCtrlY = res.data.date[2];
            $scope.envCtrlSeason = res.data.season;
            $scope.envCtrlHours = res.data.time[0];
            $scope.envCtrlDN = res.data.isNightTime == 0 ? "Day" : "Night";
            $scope.envCtrlTemp = res.data.temperature;
        }); 
    }

    $scope.increaseNPLA = () => {
        $http({
            method: "GET",
            url: "/EnvironmentController/IncreasePersonsInLivingArea"
        }).then(res => {
            $scope.envCtrlNPLA = res.data.personsInLivingRoomLivingArea;
        }); 
    }

    $scope.decreaseNPLA = () => {
        $http({
            method: "GET",
            url: "/EnvironmentController/DecreasePersonsInLivingArea"
        }).then(res => {
            $scope.envCtrlNPLA = res.data.personsInLivingRoomLivingArea;
        }); 
    }

    $scope.increaseNPDA = () => {
        $http({
            method: "GET",
            url: "/EnvironmentController/IncreasePersonsInDiningArea"
        }).then(res => {
            $scope.envCtrlNPDA = res.data.personsInLivingRoomDiningArea;
        }); 
    }

    $scope.decreaseNPDA = () => {
        $http({
            method: "GET",
            url: "/EnvironmentController/DecreasePersonsInDiningArea"
        }).then(res => {
            $scope.envCtrlNPDA = res.data.personsInLivingRoomDiningArea;
        }); 
    }
});