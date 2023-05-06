import getCommentByPost from "@/lib/getCommentByPost"
import getPostById from "@/lib/getPostById"
import { Fragment } from "react"
import Image from "next/image"
import { EnvelopeOpenIcon } from '@heroicons/react/24/outline'

export default async function PostDetails({ params}) {
  const {title, body} = await getPostById(params)
  const comments = await getCommentByPost(params)

  return (
    <Fragment>
    {/** Post */}
    <section className="flex justify-center items-end">
        <Image width={200} height={200} src={'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=500'}
         alt="User" loading="lazy" 
         className="rounded-full"></Image>
        <div className="flex flex-col ml-5">
          <h1 className="text-lg line-clamp-2 uppercase text-black text-ellipsis font-semibold">{title}</h1>
          <h3 className="text-sm capitalize text-gray-500 mt-2">{body}</h3>
        </div>
    </section>

    {/** Comments */}
    <section className="mt-10 max-w-3xl">
      {comments.map(({name, email, body}) =>{
        return <div className="flex items-center shadow-md transition-shadow border-2 mb-5 rounded-sm p-3">
          <div className="w-10"><EnvelopeOpenIcon accentHeight={10} /></div>
          <div className="flex flex-col ml-5 space-y-2">
            <div className="text-base font-bold uppercase">{name}</div>
            <div className="text-sm font-light uppercase">{email}</div>
            <div className="text-sm font-sans uppercase ">{body}</div>
          </div>
        </div>
      })}
    </section>
    </Fragment>
    
  )
}