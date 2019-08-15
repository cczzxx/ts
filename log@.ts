//修饰器就是一个函数
//普通装饰器无法传参 装饰器工厂可以传参

//1.类修饰器
//在类声明之前被声明（仅靠）。可用来监视、修改或替换类定义

//定义一个类修饰器
function logClass(target: any) {
    console.log(target);//第一个参数就是当前类
    target.prototype.apiUrl = "xxx";//动态扩展属性
    target.prototype.run = function() {
        console.log("动态扩展方法");
    }
}
function logFactoryClass(params: string) {
    return function(target: any) {
        console.log(target);//类
        console.log(params);//hello 传入的参数
        target.prototype.apiUrl = params;
        target.prototype.baseUrl = "base";
    }
}
//类的重载修饰器 简单修饰器修饰器工厂都行只要return一个类就好替代之前的类
function logReloadClass(params: string) {
    return function(target: any) {
        console.log(target);//类
        console.log(params);//hello 传入的参数
        target.prototype.apiUrl = params;

        return class Reload extends target {//原始类的属性与方法要都有
            apiUrl: any = params;
            getData() {
                console.log(this.apiUrl);
            }
        }
    }
}

//修饰器从下向上执行 先执行logFactoryClass 后执行logClass
@logClass//此时已经执行
@logFactoryClass("hello")
// @logReloadClass("123456") 执行后上面两个修饰器定义的同时用到的的属性将不会有效果
class HttpClient {
    apiUrl: string | undefined;

    constructor() {
        this.apiUrl = "我是构造函数中的apiUrl"
    }

    getData(): void {
        console.log(this.apiUrl);
    }
}

var http:any = new HttpClient();
console.log(http.apiUrl);
console.log(http.baseUrl);
http.run();
http.getData();


//2.属性装饰器 需要传入参数
function logProperty(params: any) {
    console.log(params);//传入的参数
    return function(target: any, attr: any) {
        console.log(target);//构造函数 类
        console.log(attr);//被修饰的参数名
        target[attr] = params;
    }
}
class HttpClient1 {
    @logProperty("666")
    baseUrl: string | undefined;
    apiUrl: string | undefined;

    constructor() {
        this.baseUrl = "999";
        this.apiUrl = "789";
    }
}

var http1: any = new HttpClient1();
console.log(http1.baseUrl);//若类的初始化了被修饰的参数，则参数修饰器不能改变该参数


//方法装饰器
function logMethod(params: any) {
    console.log(params, "opoppp")
    return function(target: any, methodName: any, methodDesc: any) {
        console.log(params);
        console.log(target);//原型对象 类
        console.log(methodName);
        console.log(methodDesc);

        //给类添加属性与方法
        target.name = "xxx";
        target.run = function() {
            console.log("run" + this.name);
        }

        var oMethod = methodDesc.value;
        methodDesc.value = function(...args: any[]) {
            args = args.map(value => {
                return String(value);
            })
            console.log(args, 999999999);
            oMethod.apply(this, args);
        }
    }
}

class HttpClient2 {
    @logProperty("666")
    baseUrl: string | undefined;
    apiUrl: string | undefined;

    constructor() {
        this.baseUrl = "999";
        this.apiUrl = "789";
    }

    @logMethod("111")
    getData(): void {
        console.log("123");
    }

    @logMethod("ppp")
    getData2(): void {}
}
var http2: any = new HttpClient2();
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