"use strict";
//泛型 解决类、接口以及方法的复用性，以及对不特定数据类型的支持
//1.可以支持不特定的数据类型
function getData(value) {
    //return "" + value;//error
    //return value + 0;//error
    return value;
}
getData(123);
getData("456");
function getData1(value) {
    console.log(value);
}
getData1(123);
getData1("456");
//2.泛型类
var MinClass = /** @class */ (function () {
    function MinClass(list) {
        this.list = list;
    }
    MinClass.prototype.add = function (num) {
        this.list.push(num);
    };
    MinClass.prototype.getMin = function () {
        var min = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i] < min)
                min = this.list[i];
        }
        return min;
    };
    return MinClass;
}());
var minClass = new MinClass([]);
minClass.add(11);
minClass.add(2);
minClass.add(3);
console.log(minClass.getMin());
var minClass2 = new MinClass([]);
minClass2.add("a");
minClass2.add("b");
minClass2.add("c");
console.log(minClass2.getMin());
var configFn = function (key1) {
    return key1;
};
configFn("c");
configFn(7);
function getData233(value) {
    return value;
}
var myGet = getData233;
myGet("233");
//把类当作参数的泛型类 把类当作参数来约束传入的类型
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
// class MySqlDb {
//     add(user: User): boolean {
//         console.log(user);
//         return true;
//     }
// }
var MySqlDb = /** @class */ (function () {
    function MySqlDb() {
    }
    MySqlDb.prototype.add = function (info) {
        var infoObj = JSON.parse(JSON.stringify(info));
        if (infoObj.status === 0) {
            console.log("user", infoObj, info);
        }
        if (infoObj.status === 1) {
            console.log("article", infoObj, info);
        }
    };
    MySqlDb.prototype.update = function (info, status) {
        var infoObj = JSON.parse(JSON.stringify(info));
        if (infoObj.status === 0 || infoObj.status === 1) {
            console.log(status);
        }
    };
    return MySqlDb;
}());
var u = new User();
u.userName = "czx";
u.passWord = "111";
u.status = 0;
// var db = new MySqlDb();
var db = new MySqlDb();
db.add(u);
db.update(u, 123);
var ArticleCate = /** @class */ (function () {
    function ArticleCate(params) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
    return ArticleCate;
}());
var params = {
    title: "gjkssb",
    desc: "gjkhsb",
    status: 1
};
var articCate = new ArticleCate(params);
var dbA = new MySqlDb();
dbA.add(articCate);
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDb.prototype.update = function (info) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MysqlDb;
}());
var MySqlDb1 = /** @class */ (function () {
    function MySqlDb1() {
    }
    MySqlDb1.prototype.add = function (info) {
        console.log(info, "lll");
        return true;
    };
    MySqlDb1.prototype.update = function (info) {
        throw new Error("Method not implemented.");
    };
    MySqlDb1.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MySqlDb1.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MySqlDb1;
}());
//操作用户表 定义一个User类来和数据表做映射
var User1 = /** @class */ (function () {
    function User1() {
    }
    return User1;
}());
var user = new User1();
user.userName = "Gjk";
user.passWord = "123456";
var mspl = new MysqlDb();
mspl.add(user);
var mSpl = new MySqlDb1();
mSpl.add(user);
//范型也可看作制定规则
//<>中为规则 可为数据类型也可以是类
//定义 函数 或者 类 或者 接口 的时候 每一个要被规范的地方用T代表
