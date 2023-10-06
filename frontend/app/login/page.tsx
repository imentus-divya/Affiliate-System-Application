"use client"
import {toast} from "react-hot-toast"
import Link from 'next/link'
import {useRef} from "react";
export default function Home() {
	const emailElement = useRef<null>();
	const createUser = async () => {
		if (!emailElement || !emailElement.current) {
			console.log("🚀 ~ file: page.tsx:8 ~ createUser ~ emailElement:", emailElement)
			return toast.error("Please enter an" +
			" email")
		}
		console.log("🚀 ~ file: page.tsx:8 ~ createUser ~ current:");
		fetch("/api/create_user", { method: "POST", mode: "no-cors", headers: {"Content-Type": "application/json"}, body: JSON.stringify({email: emailElement.current.value})})
			  .then(res => res.json())
			  .then(res => {
				  console.log(res)
				  if (res.type === 'error') {
					  toast.error(res.message)
				  } else {
					  toast.success("user created")
					//   localStorage.setItem("userId", emailElement.current?.value)
				  }
				  
			  })
			  .catch(toast.error)
	}
	console.log("🚀 ~ file: page.tsx:25 ~ createUser ~ createUser:")

	return (
		<main className="flex h-[100vh] w-100 flex-row items-center justify-center m-auto loginn">

			<div className="h-2/3 w-1/3 font-mono text-sm flex border-solid border-2 border-zinc-900 ... rounded-md bg-zinc-900 shadow-md ..." >

				   <div className={"flex flex-col p-2 justify-between items-center h-4/5 w-full "}>
					
					<h1 className="text-center text-white text-lg p-2">Log In Your Account</h1>
					
					<input className={'p-3 w-3/5  outline-amber-100 outline-1 text-white bg-transparent border-b border-gray-500'} type="text" placeholder="Enter your Email" />
					<input className={'p-3 w-3/5  outline-amber-100 outline-1 text-white bg-transparent border-b border-gray-500'} type="password" placeholder="Enter your Password" />
					
					  <div className="flex flex-col w-1/2 justify-between">
					  <Link href='/create' className="p-1  w-full text-center">
					  <button className={"p-4  w-full bg-violet-400 transition-all hover:bg-violet-300"} type="submit" onClick={createUser}>SignUp</button>
					  </Link>
					  

					  <Link href='/dashboard' className="p-1  w-full text-center">
					  <button className={"p-4  w-full  bg-violet-400 transition-all hover:bg-violet-300"} type="submit" onClick={createUser}>Enter</button> 
					  </Link>
					  </div>

			        </div>
                  

			</div> 



		  </main>
	)
}
