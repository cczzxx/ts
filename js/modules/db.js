"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbUrl = "http://123.com/";
function getData() {
    console.log("获取数据");
    return [123, 456, 789];
}
exports.getData = getData;
function saveData() {
    console.log("保存数据");
}
exports.saveData = saveData;
function defaultFn() {
    console.log("666");
}
exports.default = defaultFn;
var CC;
(function (CC) {
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.eat = function () {
            console.log(this.name + "饿了");
        };
        return Animal;
    }());
    CC.Animal = Animal;
})(CC = exports.CC || (exports.CC = {}));
