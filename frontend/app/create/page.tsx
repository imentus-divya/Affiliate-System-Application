"use client"
import {toast} from "react-hot-toast"
import {useRef} from "react";
// import './globals.css'
import Link from 'next/link'
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
		<main className="flex h-[100vh] w-full flex-row items-center justify-center  ">

			<div className="h-[80vh] w-4/5 font-mono text-sm flex bg-zinc-900" >

				   <div className={"flex flex-col w-1/2 md:w-2/3 p-2 justify-between items-center h-full "}>
					
					<h1 className="text-center text-lg p-2 text-white">Create Your Account</h1>
					<input className={'p-3 w-3/5  outline-amber-100 outline-1 text-white bg-transparent border-b border-gray-500'} type="text" placeholder="Enter your FirstName" />
					<input className={'p-3 w-3/5  outline-amber-100 outline-1 text-white bg-transparent border-b border-gray-500'} type="text" placeholder="Enter your Last Name" />
					<input className={'p-3 w-3/5  outline-amber-100 outline-1 text-white bg-transparent border-b border-gray-500'} type="email" placeholder="Enter your Email" />
					<input className={'p-3 w-3/5  outline-amber-100 outline-1 text-white bg-transparent border-b border-gray-500'} type="password" placeholder="Enter Your Password" />
					<input className={'p-3 w-3/5  outline-amber-100 outline-1 text-white bg-transparent border-b border-gray-500'} type="text" placeholder="Enter your Contact" />
					<input className={'p-3 w-3/5  outline-amber-100 outline-1 text-white bg-transparent border-b border-gray-500'} type="text" placeholder="Enter your Age" />
					
					  <div className="flex  w-3/5 text-white justify-center ">

						<Link href='#' className="p-4 bg-violet-400 hover:bg-violet-500 w-1/3 text-center">
						<button className={""} type="submit" onClick={createUser}>Submit</button>
						</Link>
					  

					  <Link href='/login' className="p-4 ml-2 bg-violet-400 hover:bg-violet-500 w-1/3 text-center">
					  <button className={""} type="submit" onClick={createUser}>LogIn</button>
					  </Link>
					  </div>
			</div>


                  <div className="min-h-[80vh] w-1/2  sm:w-1/3 md:w-2/3 login-bg "></div> 

			</div> 



		  </main>
	)
}
