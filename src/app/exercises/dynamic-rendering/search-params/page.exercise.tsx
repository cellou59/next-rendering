import RenderTime from '@/components/render-time'
import {getPosts} from '@/db/sgbd'
import {Post} from '@/lib/type'

// 🐶 Ajoute les `props` pour avoir accès à `searchParams`
//https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional
const Page = async (props: {
  searchParams: Promise<{[key: string]: string | string[] | undefined}>
}) => {
  const searchParams = await props.searchParams
  const posts = await getPosts()

  const filterField = searchParams?.filter as string
  const text = searchParams?.text as string

  const filteredPosts = posts.filter((post) => {
    return post[filterField as keyof Post]
      ?.toLowerCase()
      .includes(text.toLowerCase())
  })

  return (
    <div className="mx-auto max-w-4xl p-6 text-lg">
      <h1 className="mb-4 text-center text-3xl font-bold">Search Posts</h1>
      <ul className="list-disc p-4 pl-4">
        {filteredPosts?.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <RenderTime />
    </div>
  )
}
export default Page
