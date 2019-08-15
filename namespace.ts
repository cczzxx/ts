namespace AA {
    export class Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        eat(): void {
            console.log(this.name + "饿了");
        }
    }
}

namespace BB {
    export class Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        eat(): void {
            console.log(this.name + "饿了");
        }
    }
}

var dog = new AA.Animal("gg");
dog.eat();

var dog1 = new BB.Animal("jj");
dog1.eat();

import { CC } from "./modules/db";
var dog2 = new CC.Animal("kk");
dog2.eat(); 

//可用namespace代表一个命名空间 namespace XX {}
//其中定义的类要用export向外暴露
//不同的命名空间中可以有同名class 实例化时要 XX.classname