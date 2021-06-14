// 枚举类型

export {}

// const PostStatus = {
//   Draft: 0,
//   Unpublished: 1,
//   Published: 2
// }

// enum PostStatus {
//   Draft = 0,
//   Unpublished = 1,
//   Published = 2
// }

// enum PostStatus {
//   Draft = 6,
//   Unpublished, // 7
//   Published // 8
// }

// 字符串枚举
// enum PostStatus {
//   Draft = "aaa",
//   Unpublished = "bbb", 
//   Published = "ccc"
// }

// 常量枚举
const enum PostStatus {
  Draft,
  Unpublished,
  Published
}

const post = {
  title: 'this is a title of the current post',
  content: 'Hello TypeScript! This is a typed superset of JavaScript.',
  status: PostStatus.Draft // 0 // 1 // 2
}