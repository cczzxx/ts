"use strict";
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
//ts 类
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run = function () {
        console.log(this.name);
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var p = new Person("czx");
p.run();
p.setName("hhh");
console.log(p.getName());
//继承 extends super 
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    return Web;
}(Person));
var w = new Web("xxx");
w.run();
//类里面的修饰符 定义属性时的修饰符
//public 公有类型也是默认的修饰符 类里面、子类、类外面都可以访问
//protected 保护类型 类里面、子类可访问 protected
//private 私有类型 类里面可以访问 private
var Person1 = /** @class */ (function () {
    function Person1(name, sex, age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }
    Person1.prototype.run = function () {
        console.log(this.name);
    };
    Person1.prototype.runSex = function () {
        console.log(this.sex);
    };
    Person1.prototype.runAge = function () {
        console.log(this.age);
    };
    return Person1;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name, sex, age) {
        return _super.call(this, name, sex, age) || this;
    }
    Child.prototype.run = function () {
        console.log(this.name);
    };
    Child.prototype.runAge = function () {
        //console.log(this.age); //子类调用private 报错
    };
    return Child;
}(Person1));
var person = new Person1("p1", "woman", 30);
var child = new Child("ccc", "man", 18);
//public name
person.run(); //类里面 ok
child.run(); //子类里面 ok
console.log(person.name); //类外面 ok
//protected sex
person.runSex(); //类里面 ok
child.runSex(); //子类调用 ok
//console.log(person.sex);// 类外面 报错
//private age 
person.runAge(); //类调用 ok
child.runAge(); //子类里面 上面报错
//console.log(person.age);//类外面 报错
//静态属性 静态方法 static
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.run = function () {
        console.log(this.name + " run");
        //console.log(this.age);//error
        console.log(Person2.age); //非静态方法可以用类访问静态属性
    };
    Person2.play = function () {
        //console.log(this.name + "play");//error name为public属性
        console.log("静态方法中不要调用非静态属性");
        console.log(this.age, Person2.age, "静态方法中也可用this访问静态属性");
    };
    Person2.age = 18;
    return Person2;
}());
var per = new Person2("jjj");
per.run();
//per.play();//error 静态方法实例化后不可调用
Person2.play();
console.log(Person2.age);
//多态 父类定义一个方法不去实现，让继承他的子类去实现，不同子类有不同表现方法
//多态属于继承
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log("eat");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        console.log("dag eat beef");
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        console.log("cat eat fish");
    };
    return Cat;
}(Animal));
//这个eat方法就可表现多态
//抽象方法 抽象类  abstract 相当于指定规范，规定继承类抽象类的子类必须包含定义的抽象方法
var Animals = /** @class */ (function () {
    function Animals(name) {
        this.name = name;
    }
    Animals.prototype.run = function () { };
    return Animals;
}());
//抽象类不能被实例化
//var a = new Animals();//error
//要想实例化只能实例其子类
var Dogs = /** @class */ (function (_super) {
    __extends(Dogs, _super);
    function Dogs(name) {
        return _super.call(this, name) || this;
    }
    Dogs.prototype.eat = function () {
        return this.name + " eat beff";
    };
    Dogs.prototype.play = function () { };
    return Dogs;
}(Animals));
var dogs = new Dogs("Bob");
console.log(dogs.eat());
//与es6的class大体相同
//定义属性时有public protected private
//由static定义的静态属性不能被实例化访问 可在静态方法中用this访问以及用类名访问，即类名.属性名
//多态 -> 父类中的方法只有名字 不同的子类有多种不同的实现
//抽象类与抽象方法 -> abstract 抽象类不能被实例化，抽象方法只能出现在抽象类中 不包括具体的实现，继承类抽象类的子类必须包含其中的抽象方法
