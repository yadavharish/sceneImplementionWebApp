const express = require('express');
const router = express.Router();

var LRoom = require('../helpers/LRoom');
var LRoomSceneImplementer = require('../helpers/LRoomSceneImplementer');

router.get('/SwitchSmartBulb', (req, res) => {
    let smartBulbCurrentStatus = LRoom.switchSmartBulbStatus();
    res.json({ smartBulbStatus: smartBulbCurrentStatus });
});

router.get('/ImplementEmptyLivingRoomScene', (req, res) => {
    res.json(LRoom.implementScene('emptyLivingRoom'));
});

router.get('/GetStatus', (req, res) => {
    LRoomSceneImplementer();
    res.json(LRoom.getStatus());
});

router.get('/ChangeStatus/:deviceName', (req, res) => {
    res.json(LRoom.changeStatus(req.params.deviceName));
});

router.get('/UpdateDeviceAttribute/:deviceName/:attribute/:Attribute/:op', (req, res) => {
    res.json(LRoom.updateDeviceAttribute(req.params.deviceName, req.params.attribute, req.params.Attribute, req.params.op));
});

module.exports = router;