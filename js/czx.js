"use strict";
var A = /** @class */ (function () {
    function A(name) {
        this.name = name;
    }
    A.prototype.eat = function () {
        console.log("eat");
    };
    return A;
}());
var pp = new A("cc");
