"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.gender = true;
    }
    Person.prototype.sayHi = function (msg) {
        console.log("I am " + this.name + ", " + msg + ".");
        console.log(this.age);
    };
    return Person;
}());
var mike = new Person('mike', 18);
console.log(mike.name);
//# sourceMappingURL=16-class-readonly.js.map