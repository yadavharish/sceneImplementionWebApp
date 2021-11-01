const express = require('express');
const router = express.Router();

var env = require('../helpers/env');

router.get('/GetStatus', (req, res) => {
    res.json(env.getStatus());
});

router.get('/IncreaseTemperature', (req, res) => {
    res.json(env.increaseTemperature());
});

router.get('/DecreaseTemperature', (req, res) => {
    res.json(env.decreaseTemperature());
});

router.get('/IncreaseHours', (req, res) => {
    res.json(env.increaseHours());
});

router.get('/DecreaseHours', (req, res) => {
    res.json(env.decreaseHours());
});

router.get('/ChangeDayNight', (req, res) => {
    res.json(env.changeDayNight());
});

router.get('/IncreaseMonth', (req, res) => {
    res.json(env.increaseMonth());
});

router.get('/DecreaseMonth', (req, res) => {
    res.json(env.decreaseMonth());
});

router.get('/ChangeSeason', (req, res) => {
    res.json(env.changeSeason());
});

router.get('/IncreasePersonsInLivingArea', (req, res) => {
    res.json(env.increasePersonsInLivingArea());
});

router.get('/DecreasePersonsInLivingArea', (req, res) => {
    res.json(env.decreasePersonsInLivingArea());
});

router.get('/IncreasePersonsInDiningArea', (req, res) => {
    res.json(env.increasePersonsInDiningArea());
});

router.get('/DecreasePersonsInDiningArea', (req, res) => {
    res.json(env.decreasePersonsInDiningArea());
});

module.exports = router;