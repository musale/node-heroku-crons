"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const schedule = require("node-schedule");
const logging_1 = require("../tools/logging");
schedule.scheduleJob('* * * * *', function () {
    logging_1.default.info(`Running a cron job at ${new Date().toISOString()}`);
});
const app = express();
app.get('/', (req, res) => {
    res.send({ success: 'home is here', error: null });
});
exports.default = app;
