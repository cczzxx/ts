"use strict";
// 1. npm install -g typescript
// 2. 文件夹 ts文件
// 3. tsc --init  ->  tsconfig.json
// 4. 更改tsconfig.json 改变outDir属性 定义输出都文件位置  ->  js文件夹
// 5. vscode打开任务监测ts -> 实时转换
console.log("hello word");
var str = "hhh";
//ts代码必须加类型校验
//定义数组有两种方式 var arr:number[] = [1, 2, 3]; var arr:Array<number>=[1, 2, 3];
//新增 元祖类型 tuple 属于数组都一种 可指定某位置上都类型 var arr:[number, string] = [1, "2", "3"];
//新增 枚举类型 enum 可理解为事先定义某些变量
// enum Flag {success = 1, error = 0}; let s:Flag = Flag.success; let e:Flag = Flag.error; 
// console.log(s, e);//1 0
//标识符若没赋值 它都值就是下标或前面+1
// enum Color {blue, red = 3, orange}; let a:Color = Color.blue; let b:Color = Color.red; let c:Color = Color.orange;
// console.log(a, b, c);//0, 3, 4
// enum Color {blue, red = 2, orange = "hh", pink = 1, black = 2, white};
// let a: Color = Color.blue;
// let b: Color = Color.red;
// let c: Color = Color.orange;
// let d: Color = Color.pink;
// let e: Color = Color.black;
// let f: Color = Color.white;
// console.log(a, b, c, d, e, f, "here");
//新增 任意类型 any 可改变变量类型 var num:any = 123; num = "123"; OK的
// var oBox:any = document.getElementById('box');
// oBox.style.color = "red";
//可用 | 添加其他的数据类型
// var num:number | null | undefined;
// console.log(num);
// num = null;
// console.log(num);
// var test:number | string = 123;
// test = "hhh";
// console.log(test);
//新增 空类型 void 常用在定义无返回值的函数时，指定返回值为空
// function addOne(num:number):number { return num + 1; }
// function addOne(num:number):void { console.log(num + 1); }
//新增 never类型 包括null undefined 或错误。 此意味着声明为never的变量只能被never类型所赋值
// var a:never;
// a = (() => {
//     throw new Error('err');
// })();
//ts新特性
//定义变量时需要声明类型
//新增了元祖 枚举 任意类型 空类型 错误类型
//元祖可看成规定数组中任意位置数据类型的约束型数组
//枚举可看成一个对象，其中的每一个key代表某个数据，可通过指定key来给被声明为该每句类型的变量赋值
//any类型的变量可改变数据类型 或快速处理复杂情况
//空类型常用来约束没有返回值的函数
//错误类型 不常用，可用来声明错误
//函数重载 同名函数通过参数来判断执行哪一个方法
