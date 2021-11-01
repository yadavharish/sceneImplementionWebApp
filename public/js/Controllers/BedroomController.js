app.controller('BedroomController', ($scope, $http) => {
    $scope.$on('showBedroom', () => {
        $scope.showBedroom = true;
        // $scope.getLivingRoomStatus();
    });

    $scope.closeLR = () => {
        $scope.$emit('showDashboard', {});
        $scope.showBedroom = false;
    }

    // $scope.getLivingRoomStatus = () => {
    //     $http({
    //         method: "GET",
    //         url: "/LivingRoomSceneImplementation/GetStatus"
    //     }).then(res => {
    //         $scope.llaStatus = res.data.livingAreaLamp.status ? "On" : "Off";
    //         $scope.llaBrightnessLevel = res.data.livingAreaLamp.brightnessLevel;
    //         $scope.sbdaStatus = res.data.diningAreaSmartBulb.status ? "On" : "Off";
    //         $scope.sbdaBrightnessLevel = res.data.diningAreaSmartBulb.brightnessLevel;
    //         $scope.sbdaColor = res.data.diningAreaSmartBulb.color;
    //         $scope.sblaStatus = res.data.livingAreaSmartBulb.status ? "On" : "Off";
    //         $scope.sblaBrightnessLevel = res.data.livingAreaSmartBulb.brightnessLevel;
    //         $scope.sblaColor = res.data.livingAreaSmartBulb.color;
    //         $scope.tblaStatus = res.data.livingAreaTubelight.status ? "On" : "Off";
    //         $scope.tblaBrightnessLevel = res.data.livingAreaTubelight.brightnessLevel;
    //         $scope.tbdaStatus = res.data.diningAreaTubelight.status ? "On" : "Off";
    //         $scope.tbdaBrightnessLevel = res.data.diningAreaTubelight.brightnessLevel;
    //         $scope.acdaStatus = res.data.diningAreaAirConditioner.status ? "On" : "Off";
    //         $scope.acdaFanSpeed = res.data.diningAreaAirConditioner.fanSpeed;
    //         $scope.acdaSwing = res.data.diningAreaAirConditioner.swing;
    //         $scope.acdaTemperature = res.data.diningAreaAirConditioner.temperature;
    //         $scope.aclaStatus = res.data.livingAreaAirConditioner.status ? "On" : "Off";
    //         $scope.aclaFanSpeed = res.data.livingAreaAirConditioner.fanSpeed;
    //         $scope.aclaSwing = res.data.livingAreaAirConditioner.swing;
    //         $scope.aclaTemperature = res.data.livingAreaAirConditioner.temperature;
    //         $scope.flaStatus = res.data.livingAreaFan.status ? "On" : "Off";
    //         $scope.flaSpeed = res.data.livingAreaFan.speed;
    //         $scope.fdaStatus = res.data.diningAreaFan.status ? "On" : "Off";
    //         $scope.fdaSpeed = res.data.diningAreaFan.speed;
    //         $scope.hdaStatus = res.data.diningAreaHeater.status ? "On" : "Off";
    //         $scope.hdaFanSpeed = res.data.diningAreaHeater.fanSpeed;
    //         $scope.hdaTemperature = res.data.diningAreaHeater.temperature;
    //         $scope.hlaStatus = res.data.livingAreaHeater.status ? "On" : "Off";
    //         $scope.hlaFanSpeed = res.data.livingAreaHeater.fanSpeed;
    //         $scope.hlaTemperature = res.data.livingAreaHeater.temperature;
    //         $scope.entdoorPosition = res.data.entranceDoor.position;
    //         $scope.entdoorLock = res.data.entranceDoor.lock;
    //         $scope.tvlaStatus = res.data.livingAreaTelevision.status ? "On" : "Off";
    //         $scope.tvlaChannelNumber = res.data.livingAreaTelevision.channelNumber;
    //         $scope.tvlaVolumeLevel = res.data.livingAreaTelevision.volumeLevel;
    //         $scope.tvlaBrightnessLevel = res.data.livingAreaTelevision.brightnessLevel;
    //         $scope.curlaPosition = res.data.livingAreaCurtains.position;
    //         $scope.claStatus = res.data.livingAreaCooler.status ? "On" : "Off";
    //         $scope.claFanSpeed = res.data.livingAreaCooler.fanSpeed;
    //         $scope.claSwing = res.data.livingAreaCooler.swing;
    //         $scope.claMist = res.data.livingAreaCooler.mist;
    //     });
    // }

    // $scope.changeStatus = (deviceName) => {
    //     $http({
    //         method: "GET",
    //         url: "/LivingRoomSceneImplementation/ChangeStatus/" + deviceName
    //     }).then(res => {
    //         $scope[deviceName + "Status"] = res.data.status ? "On" : "Off";
    //     });
    // }

    // $scope.updateDeviceAttribute = (deviceName, attribute, Attribute, op) => {
    //     $http({
    //         method: "GET",
    //         url: "/LivingRoomSceneImplementation/UpdateDeviceAttribute/" + deviceName + "/" + attribute + "/" + Attribute + "/" + op
    //     }).then(res => {
    //         $scope[deviceName + Attribute] = res.data.attribute;
    //     });
    // }
});