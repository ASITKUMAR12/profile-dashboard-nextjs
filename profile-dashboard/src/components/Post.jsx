import Image from "next/image";

const Post = ({title, body})=>{
    return <div className="flex flex-col w-15 min-h-full items-center border-2 p-2 justify-evenly hover:shadow-md transition-shadow">
        <Image width={100} height={100} src={'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'}
         alt="Logo" loading="lazy" 
         className="rounded-full"></Image>
        <div className="text-lg line-clamp-1 uppercase text-black text-ellipsis font-semibold">{title}</div>
        <div className="text-sm capitalize text-gray-500">{body}</div>
    </div>
}

export default Post;