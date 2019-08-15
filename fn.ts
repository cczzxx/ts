//函数声明法
(function run(age: number, name: string):string {
    console.log(age)
    return "123";
})(12, "czx");

//匿名函数
var run2 = function():string {
    return "123";
}

//ts咋定义方法传参
function run3(name: any): string {
    console.log(name);
    return "123";
}
run3("c")

//行参与实参不同的时候 ts会报错 需配置可选参数 ?，可选参数要放在最右边
function run4(name:string, age?:number):void {
    if(age) {
        console.log(name + "年龄是" + age);
    }else {
        console.log(name + "年龄保密");
    }
}
// run4("Bob");

//默认参数 es6 ts可设置
function run5(name:string = "123"):void {
    console.log(name);
}
run5();

//剩余参数
function run6(a:number, ...result:number[]):number {
    let sum = a;//1
    for(let i = 0; i < result.length; i++) {
        sum =+ result[i];
    }
    return sum;
}
run6(1, 2, 3);// 1 +2+3

function runn(a: string, b: number, ...result:[string, number, string]): void {}
runn("i", 2, "j", 3, "k");

//函数重载 通过为同一个函数提供多个函数类型定义来实现多种功能的目的
    //es5中同名方法下面的会替换上面的
function run7(name:string):string;
function run7(age:number):string;
function run7(test:any):any {
    if(typeof test === "string") return "第一个";
    if(typeof test === "number") return "第二个";
}
run7(1);
//run7([1, 2])//报错

function run8(name:string):string;
function run8(name:string, age?:number):string;
function run8(name:any, age?:any):any {
    if(!age) return "第一个";
    if(age) return "第二个";
}
run8("bob");