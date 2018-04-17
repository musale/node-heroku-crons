"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const assert_1 = require("assert");
const logging_1 = require("./tools/logging");
const PORT = 8080;
const HOST = '0.0.0.0';
server_1.default.listen(PORT, HOST, err => {
    assert_1.ifError(err);
    logging_1.default.info(`Started ${process.env.NODE_ENV} server on port http://${HOST}:${PORT}`);
});
