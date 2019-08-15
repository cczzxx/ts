"use strict";
//函数声明法
(function run(age, name) {
    console.log(age);
    return "123";
})(12, "czx");
//匿名函数
var run2 = function () {
    return "123";
};
//ts咋定义方法传参
function run3(name) {
    console.log(name);
    return "123";
}
run3("c");
//行参与实参不同的时候 ts会报错 需配置可选参数 ?，可选参数要放在最右边
function run4(name, age) {
    if (age) {
        console.log(name + "年龄是" + age);
    }
    else {
        console.log(name + "年龄保密");
    }
}
// run4("Bob");
//默认参数 es6 ts可设置
function run5(name) {
    if (name === void 0) { name = "123"; }
    console.log(name);
}
run5();
//剩余参数
function run6(a) {
    var result = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        result[_i - 1] = arguments[_i];
    }
    var sum = a; //1
    for (var i = 0; i < result.length; i++) {
        sum = +result[i];
    }
    return sum;
}
run6(1, 2, 3); // 1 +2+3
function runn(a, b) {
    var result = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        result[_i - 2] = arguments[_i];
    }
}
runn("i", 2, "j", 3, "k");
function run7(test) {
    if (typeof test === "string")
        return "第一个";
    if (typeof test === "number")
        return "第二个";
}
run7(1);
function run8(name, age) {
    if (!age)
        return "第一个";
    if (age)
        return "第二个";
}
run8("bob");
