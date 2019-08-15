//泛型 解决类、接口以及方法的复用性，以及对不特定数据类型的支持
//1.可以支持不特定的数据类型
function getData<T>(value: T): T {//此时 参数与返回值都按泛型来
    //return "" + value;//error
    //return value + 0;//error
    return value;
}
getData<number>(123);
getData<string>("456");
function getData1<T>(value: T): void {
    console.log(value);
}
getData1<number>(123);
getData1<string>("456");

//2.泛型类
class MinClass<T> {
    list: T[];

    constructor(list: T[]) {
        this.list = list;
    }

    add(num: T): void {
        this.list.push(num);
    }

    getMin(): T {
        var min = this.list[0];
        for(var i = 0; i < this.list.length; i++) {
            if(this.list[i] < min) min = this.list[i];
        }
        return min;
    }
}

var minClass = new MinClass<number>([]);
minClass.add(11);
minClass.add(2);
minClass.add(3);
console.log(minClass.getMin());

var minClass2 = new MinClass<string>([]);
minClass2.add("a");
minClass2.add("b");
minClass2.add("c");
console.log(minClass2.getMin());


//3.泛型接口
//写法1
interface CongfigFace {
    <T>(key1: T): T;
}
var configFn: CongfigFace = function<T>(key1: T): T {
    return key1;
}
configFn<string>("c");
configFn<number>(7);
//写法2
interface ConfigFn1<T> {
    (value: T): T
}
function getData233<T>(value: T): T {
    return value;
}
var myGet:ConfigFn1<string> = getData233;
myGet("233")

//把类当作参数的泛型类 把类当作参数来约束传入的类型
class User {
    userName: string | undefined;
    passWord: string | undefined;
    status: number | undefined;
}

// class MySqlDb {
//     add(user: User): boolean {
//         console.log(user);
//         return true;
//     }
// }
class MySqlDb<T> {
    add(info: T): void {
        var infoObj = JSON.parse(JSON.stringify(info));
        if(infoObj.status === 0) {
            console.log("user", infoObj, info);
        }
        if(infoObj.status === 1) {
            console.log("article", infoObj, info);
        }
    }
    update(info: T, status: number): void {
        var infoObj = JSON.parse(JSON.stringify(info));
        if(infoObj.status === 0 || infoObj.status === 1) {
            console.log(status);
        }
    }
}

var u = new User();
u.userName = "czx";
u.passWord = "111";
u.status = 0;

// var db = new MySqlDb();
var db = new MySqlDb<User>();
db.add(u);
db.update(u, 123);

class ArticleCate {
    title: string;
    desc: string;
    status: number | undefined;

    constructor(params: {
        title: string,
        desc: string,
        status?: number
    }) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
}

var params = {
    title: "gjkssb",
    desc: "gjkhsb",
    status: 1
}
var articCate = new ArticleCate(params);

var dbA = new MySqlDb<ArticleCate>();
dbA.add(articCate);



//借口与泛型配合实现数据库更能 多个具有相同功能的数据库
interface DBI<T> {
    add(info: T): boolean;
    update(info: T): boolean;
    delete(id: number): boolean;
    get(id: number): boolean;
}

class MysqlDb<T> implements DBI<T> {
    add(info: T): boolean {
        console.log(info);
        return true;
    }   
    update(info: T): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): boolean {
        throw new Error("Method not implemented.");
    }
}
class MySqlDb1<T> implements DBI<T> {
    add(info: T): boolean {
        console.log(info, "lll");
        return true;
    }    
    update(info: T): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): boolean {
        throw new Error("Method not implemented.");
    }
}
//操作用户表 定义一个User类来和数据表做映射
class User1 {
    userName: string | undefined;
    passWord: string | undefined;
}
var user = new User1();
user.userName = "Gjk";
user.passWord = "123456";

var mspl = new MysqlDb<User1>();
mspl.add(user);
var mSpl = new MySqlDb1<User1>();
mSpl.add(user);

//范型也可看作制定规则
//<>中为规则 可为数据类型也可以是类
//定义 函数 或者 类 或者 接口 的时候 每一个要被规范的地方用T代表