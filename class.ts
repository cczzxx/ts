//ts 类
class Person {
    name: string;//ts

    constructor(name: string) {
        this.name = name;
    }

    run(): void {
        console.log(this.name);
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }
}
var p = new Person("czx");
p.run();
p.setName("hhh");
console.log(p.getName());

//继承 extends super 
class Web extends Person {
    constructor(name: string) {
        super(name);
    }
}
var w = new Web("xxx");
w.run();

//类里面的修饰符 定义属性时的修饰符
    //public 公有类型也是默认的修饰符 类里面、子类、类外面都可以访问
    //protected 保护类型 类里面、子类可访问 protected
    //private 私有类型 类里面可以访问 private
class Person1 {
    public name: string;
    protected sex: string;
    private age: number;

    constructor(name: string, sex: string, age: number) {
        this.name = name;
        this.sex = sex;
        this.age = age
    }

    run(): void {
        console.log(this.name);
    }

    runSex(): void {
        console.log(this.sex)
    }

    runAge(): void {
        console.log(this.age);
    }
}

class Child extends Person1 {
    constructor(name: string, sex: string, age: number) {
        super(name, sex, age);
    }
    run(): void {
        console.log(this.name);
    }

    runAge(): void {
        //console.log(this.age); //子类调用private 报错
    }
}

var person = new Person1("p1", "woman", 30);
var child = new Child("ccc", "man", 18);

//public name
person.run();//类里面 ok
child.run();//子类里面 ok
console.log(person.name);//类外面 ok

//protected sex
person.runSex();//类里面 ok
child.runSex();//子类调用 ok
//console.log(person.sex);// 类外面 报错

//private age 
person.runAge();//类调用 ok
child.runAge();//子类里面 上面报错
//console.log(person.age);//类外面 报错

//静态属性 静态方法 static
class Person2 {
    name: string | undefined;
    static age = 18;

    constructor(name: string) {
        this.name = name;
    }

    run(): void {
        console.log(this.name + " run");
        //console.log(this.age);//error
        console.log(Person2.age);//非静态方法可以用类访问静态属性
    }

    static play(): void {
        //console.log(this.name + "play");//error name为public属性
        console.log("静态方法中不要调用非静态属性");
        console.log(this.age, Person2.age, "静态方法中也可用this访问静态属性");
    }
}

var per = new Person2("jjj");
per.run();
//per.play();//error 静态方法实例化后不可调用
Person2.play();
console.log(Person2.age);

//多态 父类定义一个方法不去实现，让继承他的子类去实现，不同子类有不同表现方法
//多态属于继承

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    eat() {
        console.log("eat");
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    eat(): void {
        console.log("dag eat beef");
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    eat(): void {
        console.log("cat eat fish");
    }
}
//这个eat方法就可表现多态

//抽象方法 抽象类  abstract 相当于指定规范，规定继承类抽象类的子类必须包含定义的抽象方法
abstract class Animals {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    // abstract eat(): string {
    //     return "123"
    // };//error  不包括具体实现

    abstract eat(): any;//抽象方法只能定义在抽象类中 不包括具体实现

    run(): void {}

}
//抽象类不能被实例化
//var a = new Animals();//error
//要想实例化只能实例其子类
class Dogs extends Animals {
    constructor(name: string) {
        super(name);
    }

    eat(): string {//抽象类的子类必须包含定义的抽象方法 非抽象方法可以不定义
        return this.name + " eat beff";
    }

    play(): void {}
}
var dogs = new Dogs("Bob");
console.log(dogs.eat());

//与es6的class大体相同
//定义属性时有public protected private
//由static定义的静态属性不能被实例化访问 可在静态方法中用this访问以及用类名访问，即类名.属性名
//多态 -> 父类中的方法只有名字 不同的子类有多种不同的实现
//抽象类与抽象方法 -> abstract 抽象类不能被实例化，抽象方法只能出现在抽象类中 不包括具体的实现，继承类抽象类的子类必须包含其中的抽象方法