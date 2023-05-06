import { Fragment } from "react";
import Image from "next/image";
import { AdjustmentsHorizontalIcon, UserIcon } from '@heroicons/react/24/solid'
import Link from "next/link";

const Header = () =>{
    return(
            <section className="flex justify-items-start justify-between items-center p-2 font-sans bg-white border-b-2 border-b-gray-200 shadow-slate-100">
                <Link href={"/"}>
                    <div className="flex space-x-4 ml-10">
                        <Image width={80} height={80} src={'https://www.gravatar.com/avatar/HASH'} alt="Logo" loading="lazy" className="rounded-full"></Image>
                        <p className="hidden md:inline-flex items-center text-2xl font-medium">Template</p>
                    </div>
                </Link>
                <div className="hidden space-x-6 md:flex justify-around">
                    <div className="text-base font-medium text-gray-500 hover:text-zinc-800">
                        <Link href={"/"}><span className="before:w-8 before:h-1 before:bg-orange-700">Top Post</span></Link>
                    </div>
                    <div className="text-base font-medium text-gray-500 hover:text-zinc-800  active:border-b-4 active:border-b-red-500">
                        <Link href={"/post"} >Posts</Link>
                    </div>
                    <div className="text-base font-medium text-gray-500 hover:text-zinc-800  active:border-b-4 active:border-b-red-500">
                        <Link href={"/comments"} >Comments</Link>
                    </div>
                </div>
                <div className="flex space-x-4 mr-10 items-center">
                    <div className="flex border-2 border-gray-300 bg-gray-200 p-2 rounded-full hover:bg-white hover:border-gray-700">
                        <Image width={25} height={25} src={'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'} alt="Logo" loading="lazy" className="rounded-full"></Image>
                        <p className="text-base font-medium text-gray-700 pl-3">Test User</p>
                    </div>                    
                    <AdjustmentsHorizontalIcon className="w-7 h-7"/>
                </div>
            </section>
    )
}

export default Header;