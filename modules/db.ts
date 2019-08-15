export var dbUrl = "http://123.com/";

export function getData(): any[] {
    console.log("获取数据");
    return [123, 456, 789];
}

export function saveData(): void {
    console.log("保存数据");
}

export default function defaultFn(): void {
    console.log("666");
}

export namespace CC {
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