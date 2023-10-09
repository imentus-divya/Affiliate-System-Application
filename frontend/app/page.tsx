'use client'
import Link from 'next/link'
import {toast} from "react-hot-toast"
import Image from 'next/image'
import pic from '../app/bg-img.jpg'
import './globals.css'

export default function Home() {
    
    const copyReferral = async() => {
        if (!localStorage.getItem("userId")) {
            return toast.error("Please create a user first")
        }
        fetch("/api/get_referral_link?userId=" + localStorage.getItem("userId"))
              .then(res => res.json())
              .then(async res => {
                  await navigator.clipboard.writeText(window.origin + "/" + res.referralId)
                  
              })
              .catch(toast.error)
    }
    
  return (
    

    <main className="flex h-screen w-full main bg-center bg-cover bg-fixed items-center">

 <div className="w-full sm:w-2/3 h-1/2 flex sm:w-1/2 flex-col text-center font-mono justify-center text-white  justify-evenly" >

    <h1 className="text-3xl sm:text-6xl ">CareerCrafted Learning</h1>
    <h2 className="mt-2 text-lg sm:text-xl">Professional Guidance for a Better You</h2>

    <Link className="w-full flex items-center justify-center" href="/product">
      <button className="w-2/3 sm:w-1/3 bg-violet-400 hover:bg-violet-500 text-white font-bold py-2 px-4 border border-violet-500 rounded">
        Enter
      </button>
    </Link>

  </div>
  
</main>


  )
}
