"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AA;
(function (AA) {
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.eat = function () {
            console.log(this.name + "饿了");
        };
        return Animal;
    }());
    AA.Animal = Animal;
})(AA || (AA = {}));
var BB;
(function (BB) {
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.eat = function () {
            console.log(this.name + "饿了");
        };
        return Animal;
    }());
    BB.Animal = Animal;
})(BB || (BB = {}));
var dog = new AA.Animal("gg");
dog.eat();
var dog1 = new BB.Animal("jj");
dog1.eat();
var db_1 = require("./modules/db");
var dog2 = new db_1.CC.Animal("kk");
dog2.eat();
//可用namespace代表一个命名空间 namespace XX {}
//其中定义的类要用export向外暴露
//不同的命名空间中可以有同名class 实例化时要 XX.classname
