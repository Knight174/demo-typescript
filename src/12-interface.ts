// 接口 约束对象结构 必须遵循接口规范 
export {}

interface Post {
  title: string
  content: string
}

function printPost (post: Post) {
  console.log(post.title)
  console.log(post.content)
}

printPost({
  title: 'typescript',
  content: 'a surperset of js'
})