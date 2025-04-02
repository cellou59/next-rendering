import RenderTime from '@/components/render-time'
// import {getPosts} from '@/db/sgbd'
import {Post} from '@/lib/type'
//import {cookies} from 'next/headers'
// import {headers} from 'next/headers'

const Page = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  //pense a tester les otions pour faire un rendu statique et dynamique
  const posts = await data.json()
  // const posts = await getPosts()
  const isAuth = true
  // https://nextjs.org/docs/app/api-reference/functions/cookies
  // RSC static to dynamic du to the use of cookies()
  //const cookieStore = await cookies()
  // isAuth = !!cookieStore.get('userid')
  // RSC static to dynamic du to the use of headers
  // const headersList = await headers()
  // const userAgent = headersList.get('User-Agent')
  // isAuth = !!userAgent?.includes('Chrome/134.0.0.0')
  return (
    <div className="mx-auto max-w-4xl p-6 text-lg">
      <h1 className="mb-4 text-center text-3xl font-bold">Fetch Posts</h1>
      <ul className="list-disc p-4 pl-4">
        {isAuth
          ? posts?.map((post: Post) => <li key={post.title}>{post.title}</li>)
          : ''}
      </ul>
      <RenderTime />
    </div>
  )
}
export default Page
