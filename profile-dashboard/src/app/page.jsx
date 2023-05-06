import Post from "@/components/Post";
import getPosts from "@/lib/getPosts";
import Link from "next/link";
import { Suspense } from "react"

export default async function Home(){
  const posts = await getPosts()

  return (
    <section className="grid grid-cols-2">
      {posts.map((post,i)=>{
        return i<4 && <Link key={post.id} href={`/post/${post.id}`} className="p-4">
          <Post {...post}/>
        </Link>
      })}
    </section>  
    
  )
}
