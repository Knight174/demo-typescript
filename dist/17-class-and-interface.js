"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.eat = function (food) {
        console.log("\u5403\u4E86" + food);
    };
    Human.prototype.run = function (distance) {
        console.log("\u8D70\u4E86" + distance);
    };
    return Human;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function (food) {
        console.log("\u8FDB\u98DF" + food);
    };
    Animal.prototype.run = function (distance) {
        console.log("\u722C\u4E86" + distance);
    };
    return Animal;
}());
//# sourceMappingURL=17-class-and-interface.js.map