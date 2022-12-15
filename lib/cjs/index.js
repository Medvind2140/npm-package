"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goodBye = exports.helloWorld = void 0;
function helloWorld() {
    const message = 'Hello npm package!';
    return message;
}
exports.helloWorld = helloWorld;
function goodBye() {
    const message = 'Goodbye npm package!';
    return message;
}
exports.goodBye = goodBye;
exports.default = {
    helloWorld,
    goodBye,
};
