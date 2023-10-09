"use client"

import Link from "next/link";
import '../app/globals.css'


export default function Nav() {
	return (
			<div className={"fixed flex flex-row justify-around p-5 text-white w-full bg-zinc-800  "}>
				<Link className="transition-all hover:text-violet-300" href={"/"}>Home</Link>
				<Link className="transition-all hover:text-violet-300" href={"/create"}>Create Account</Link>
				<Link className="transition-all hover:text-violet-300" href={"/product"}>Shop</Link>
			</div>
			
// 			<div className="fixed  bg-zinc-900 flex flex-col sm:flex-row justify-around p-5 text-white w-full  bottom-0 sm:top-0">
//   <Link href={"/"} className="block px-4 py-2 hover:text-blue-500">Home</Link>
//   <Link href={"/create"} className="block px-4 py-2 hover:text-blue-500">Create Account</Link>
//   <Link href={"/shop"} className="block px-4 py-2 hover:text-blue-500">Shop</Link>
// </div>
	)
}	