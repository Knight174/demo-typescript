// 接口 可选成员 只读成员 动态成员
export {}

interface Post {
  title: string
  content: string
  subtitle?: string // 可选成员
  readonly summary: string // 只读成员
}

function printPost (post: Post) {
  console.log(post.title)
  console.log(post.content)
}

printPost({
  title: 'typescript',
  content: 'a surperset of js',
  summary: 'a description'
})

// --------------------------
interface Cache {
  [key: string]: string
}

const cache: Cache = {}
cache.foo = '123'
cache.bar = '456'