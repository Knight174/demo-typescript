"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printPost(post) {
    console.log(post.title);
    console.log(post.content);
}
printPost({
    title: 'typescript',
    content: 'a surperset of js',
    summary: 'a description'
});
var cache = {};
cache.foo = '123';
cache.bar = '456';
//# sourceMappingURL=13-interface-more.js.map