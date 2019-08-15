//接口 行为和动作的规范
//定义标准 与抽象类类似 更加强大
//属性接口 函数类型接口 可索引接口 类类型接口 接口扩展

//1.属性接口  对json的约束
//对批量方法传入参数进行约束
interface FullName {
    firstName: string;
    lastName: string;
    age?: number;//可选参数 ?
}
function fn1(name1: FullName): void {
    console.log(name1.firstName, name1.lastName);
}

var name11 = {firstName: "c", lastName: "zx"}
fn1(name11);

//借口实现ajax
interface Config {
    type: string;
    url: string;
    data?: string;
    dataType: string;
}

function ajax(config: Config) {
    var xhr = new XMLHttpRequest();

    xhr.open(config.type, config.url, true);

    xhr.send(config.url);

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            console.log("success");
        }
    }
}

// ajax({
//     type: "get",
//     url: "",
//     dataType: "json"
// })


//2.函数类型接口 对方法传入的参数，以及返回值进行约束
//加密的函数类型接口
interface encrypt {//要求参数为一个key与一个value格式为string 返回也是string
    (key: string, value: string, aaa: number): string;
}
var md5: encrypt = function(first: string, second: string, aac: number): string {
    return first + second + aac;
}
console.log(md5("123", "456", 789));


//3.可索引接口 对数组、对象的约束
//一般定义数组 两种方式
// var arr: number[] = [1, 2, 3];
// var arr: Array<string> = ["1", "2", "3"];
//可索引接口约束数组
interface arrFace {
    [index: number]: string
}
var arr: arrFace = ["c", "z", "x"];
//可索引接口约束对象
interface objFace {
    [index: string]: string
}
var obj: objFace = {name: "czx", age: "18"};


//4.类类型接口 对类的约束
interface Animal11 {
    name: string;//属性
    eat(food: string): void;//方法 此处只能用void或any 类中实现时可不同 参数可没有但不能不同
}
//关键字implements 实现
class Dog11 implements Animal11 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    eat(food: string): string {
        return this.name + " eat " + food;
    }
}

var dog11 = new Dog11("zhq");
console.log(dog11.eat("shit"));


//5.接口的扩展 接口可以继承接口
interface Animal12 {
    name: string;
    age: number;
    eat(): void;//若无参数 类中方法也不可有参数
    relax(param: any): void;
}

interface Person12 extends Animal12 {
    work(day: string): void;//参数定义了类型后类中不能更改
    // relax(type: number, time: number): void;
}

interface relaxFace {
    type: number;
    time: number;
}

class Workers implements Person12 {
    //接口中定义的属性 只能是public
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    eat(): string {
        return "在吃饭";
    }

    work(day: string): string {
        return day + "在搬砖";
    }

    relax(param: relaxFace): void {
        if(param.type === 1) {
            console.log("最多休息" + param.time + "分钟");
        }else {
            console.log("最少休息" + param.time + "分钟");
        }
    }
}
var worker = new Workers("ccc", 18);
console.log(worker.work("5天"));
var relaxParam = {
    type: 1,
    time: 15
}
worker.relax(relaxParam);


//子类实现接口
class FaterClass {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    job(): void {
        console.log("家长赚钱养家");
    }
}

interface childFace {
    age: number;
    eat(food: string): void;
}

class ChildClass extends FaterClass implements childFace {
    age: number;

    constructor(name: string, age: number) {
        super(name);
        this.age = age;
    }

    eat(): void {
        console.log(this.name + "'s son " + this.age + " years old, liikes eat friut");
    }
}

var childnew = new ChildClass("ccc", 18);
childnew.job();
childnew.eat();

//相当于制定规范
//规定函数的参数 规定函数 规定类
//interface的格式类似于对象 