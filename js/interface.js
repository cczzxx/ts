"use strict";
//接口 行为和动作的规范
//定义标准 与抽象类类似 更加强大
//属性接口 函数类型接口 可索引接口 类类型接口 接口扩展
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function fn1(name1) {
    console.log(name1.firstName, name1.lastName);
}
var name11 = { firstName: "c", lastName: "zx" };
fn1(name11);
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("success");
        }
    };
}
var md5 = function (first, second, aac) {
    return first + second + aac;
};
console.log(md5("123", "456", 789));
var arr = ["c", "z", "x"];
var obj = { name: "czx", age: "18" };
//关键字implements 实现
var Dog11 = /** @class */ (function () {
    function Dog11(name) {
        this.name = name;
    }
    Dog11.prototype.eat = function (food) {
        return this.name + " eat " + food;
    };
    return Dog11;
}());
var dog11 = new Dog11("zhq");
console.log(dog11.eat("shit"));
var Workers = /** @class */ (function () {
    function Workers(name, age) {
        this.name = name;
        this.age = age;
    }
    Workers.prototype.eat = function () {
        return "在吃饭";
    };
    Workers.prototype.work = function (day) {
        return day + "在搬砖";
    };
    Workers.prototype.relax = function (param) {
        if (param.type === 1) {
            console.log("最多休息" + param.time + "分钟");
        }
        else {
            console.log("最少休息" + param.time + "分钟");
        }
    };
    return Workers;
}());
var worker = new Workers("ccc", 18);
console.log(worker.work("5天"));
var relaxParam = {
    type: 1,
    time: 15
};
worker.relax(relaxParam);
//子类实现接口
var FaterClass = /** @class */ (function () {
    function FaterClass(name) {
        this.name = name;
    }
    FaterClass.prototype.job = function () {
        console.log("家长赚钱养家");
    };
    return FaterClass;
}());
var ChildClass = /** @class */ (function (_super) {
    __extends(ChildClass, _super);
    function ChildClass(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    ChildClass.prototype.eat = function () {
        console.log(this.name + "'s son " + this.age + " years old, liikes eat friut");
    };
    return ChildClass;
}(FaterClass));
var childnew = new ChildClass("ccc", 18);
childnew.job();
childnew.eat();
//相当于制定规范
//规定函数的参数 规定函数 规定类
//interface的格式类似于对象 
