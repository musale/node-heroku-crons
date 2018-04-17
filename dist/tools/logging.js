"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eelog_1 = require("eelog");
const env = process.env.NODE_ENV;
const development = env === undefined || env === 'development';
const logger = new eelog_1.default({
    console: 'json',
    name: 'nodeHerokuApp'
});
exports.default = logger;
