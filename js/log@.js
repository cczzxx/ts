"use strict";
//修饰器就是一个函数
//普通装饰器无法传参 装饰器工厂可以传参
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//1.类修饰器
//在类声明之前被声明（仅靠）。可用来监视、修改或替换类定义
//定义一个类修饰器
function logClass(target) {
    console.log(target); //第一个参数就是当前类
    target.prototype.apiUrl = "xxx"; //动态扩展属性
    target.prototype.run = function () {
        console.log("动态扩展方法");
    };
}
function logFactoryClass(params) {
    return function (target) {
        console.log(target); //类
        console.log(params); //hello 传入的参数
        target.prototype.apiUrl = params;
        target.prototype.baseUrl = "base";
    };
}
//类的重载修饰器 简单修饰器修饰器工厂都行只要return一个类就好替代之前的类
function logReloadClass(params) {
    return function (target) {
        console.log(target); //类
        console.log(params); //hello 传入的参数
        target.prototype.apiUrl = params;
        return /** @class */ (function (_super) {
            __extends(Reload, _super);
            function Reload() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.apiUrl = params;
                return _this;
            }
            Reload.prototype.getData = function () {
                console.log(this.apiUrl);
            };
            return Reload;
        }(target));
    };
}
//修饰器从下向上执行 先执行logFactoryClass 后执行logClass
var HttpClient = /** @class */ (function () {
    function HttpClient() {
        this.apiUrl = "我是构造函数中的apiUrl";
    }
    HttpClient.prototype.getData = function () {
        console.log(this.apiUrl);
    };
    HttpClient = __decorate([
        logClass //此时已经执行
        ,
        logFactoryClass("hello")
        // @logReloadClass("123456") 执行后上面两个修饰器定义的同时用到的的属性将不会有效果
    ], HttpClient);
    return HttpClient;
}());
var http = new HttpClient();
console.log(http.apiUrl);
console.log(http.baseUrl);
http.run();
http.getData();
//2.属性装饰器 需要传入参数
function logProperty(params) {
    console.log(params); //传入的参数
    return function (target, attr) {
        console.log(target); //构造函数 类
        console.log(attr); //被修饰的参数名
        target[attr] = params;
    };
}
var HttpClient1 = /** @class */ (function () {
    function HttpClient1() {
        this.baseUrl = "999";
        this.apiUrl = "789";
    }
    __decorate([
        logProperty("666")
    ], HttpClient1.prototype, "baseUrl", void 0);
    return HttpClient1;
}());
var http1 = new HttpClient1();
console.log(http1.baseUrl); //若类的初始化了被修饰的参数，则参数修饰器不能改变该参数
//方法装饰器
function logMethod(params) {
    console.log(params, "opoppp");
    return function (target, methodName, methodDesc) {
        console.log(params);
        console.log(target); //原型对象 类
        console.log(methodName);
        console.log(methodDesc);
        //给类添加属性与方法
        target.name = "xxx";
        target.run = function () {
            console.log("run" + this.name);
        };
        var oMethod = methodDesc.value;
        methodDesc.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args = args.map(function (value) {
                return String(value);
            });
            console.log(args, 999999999);
            oMethod.apply(this, args);
        };
    };
}
var HttpClient2 = /** @class */ (function () {
    function HttpClient2() {
        this.baseUrl = "999";
        this.apiUrl = "789";
    }
    HttpClient2.prototype.getData = function () {
        console.log("123");
    };
    HttpClient2.prototype.getData2 = function () { };
    __decorate([
        logProperty("666")
    ], HttpClient2.prototype, "baseUrl", void 0);
    __decorate([
        logMethod("111")
    ], HttpClient2.prototype, "getData", null);
    __decorate([
        logMethod("ppp")
    ], HttpClient2.prototype, "getData2", null);
    return HttpClient2;
}());
var http2 = new HttpClient2();
http2.getData(4, 5, "6");
console.log(http2.name);
http2.run();
//方法参数装饰器
//修饰器是一个函数
//在定义一个类的各个阶段执行
//有 类修饰器 属性修饰器 方法修饰器 方法参数修饰器
//执行顺序是 属性修饰器-->方法修饰器-->方法参数修饰器-->类修饰器 同级时从右向左，从下到上
//@加函数名 代表修饰器到调用
//工厂修饰器要返回函数 可传参，普通修饰器不返回函数 不可传参
