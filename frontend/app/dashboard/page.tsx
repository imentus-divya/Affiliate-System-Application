"use client"
import { toast } from "react-hot-toast"
import Link from 'next/link'
import { useRef } from "react";
export default function Home() {
   return (
      <body class="relative  overflow-hidden max-h-screen">
         <header class="fixed right-0 top-0 left-60  py-3 px-4 h-16">
            <div class="max-w-4xl mx-auto">
               <div class="flex items-center justify-between">
                  <div>
                     <button type="button" class="flex items-center focus:outline-none rounded-lg text-gray-600  hover:text-violet-600 focus:text-violet-600 font-semibold p-2 border border-transparent hover:border-violet-400 focus:border-violet-400 transition">
                        <span class="inline-flex items-center justify-center w-6 h-6 text-gray-600 text-xs rounded bg-white transition mr-2">
                           <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                           </svg>
                        </span>
                        <span class="text-sm">Archive</span>
                     </button>
                  </div>
                  <div class="text-lg font-bold">Today's Plan</div>
                  <div>
                     <button type="button" class="flex items-center focus:outline-none rounded-lg text-gray-600 hover:text-violet-600 focus:text-violet-600 font-semibold p-2 border border-transparent hover:border-violet-400 focus:border-violet-400 transition">
                        <span class="text-sm">This week</span>
                        <span class="inline-flex items-center justify-center w-6 h-6 text-gray-600 text-xs rounded bg-white transition ml-2">
                           <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                           </svg>
                        </span>
                     </button>
                  </div>
               </div>
            </div>
         </header>

         <aside class="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-1/10">
            <div class="flex flex-col justify-between h-full">
               <div class="flex-grow">
                  <div class="px-4 py-6 text-center border-b">
                     <h1 class="text-xl font-bold leading-none"><span class="text-violet-400">Manage</span>Link</h1>
                  </div>
                  <div class="p-4">
                     <ul class="space-y-1">
                        <li>
                           <a href="javascript:void(0)" class="flex items-center transition-all hover:bg-violet-300 rounded-xl font-bold text-sm text-gray-900 py-3 px-4">
                              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="text-lg mr-4" viewBox="0 0 16 16">
                                 <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                              </svg>Link1
                           </a>
                        </li>
                        <li>
                           <a href="javascript:void(0)" class="flex bg-white  transition-all hover:bg-violet-300  rounded-xl font-bold text-sm  text-gray-900 py-3 px-4">
                              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="text-lg mr-4" viewBox="0 0 16 16">
                                 <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />
                              </svg>Link2
                           </a>
                        </li>
                        <li>
                           <a href="javascript:void(0)" class="flex bg-white transition-all hover:bg-violet-300 rounded-xl font-bold text-sm text-gray-900 py-3 px-4">
                              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="text-lg mr-4" viewBox="0 0 16 16">
                                 <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z" />
                              </svg>Link3
                           </a>
                        </li>
                        <li>
                           <a href="javascript:void(0)" class="flex bg-white  transition-all hover:bg-violet-300 rounded-xl font-bold text-sm text-gray-900 py-3 px-4">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-lg mr-4" viewBox="0 0 16 16">
                                 <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                              </svg>Link3
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
               {/* <div class="p-4">
                  <button type="button" class="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">
                     <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="" viewBox="0 0 16 16">
                        <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                     </svg>
                  </button> <span class="font-bold text-sm ml-2">Logout</span>
               </div>    */}
            </div>
         </aside>

         <main class="ml-60 pt-16 max-h-screen overflow-auto">
            <div class="px-6 py-8">
               <div class="max-w-4xl mx-auto">
                  <div class="bg-white rounded-3xl p-8 mb-5">


                     {/* one txt box start */}
                     <h1 class="text-3xl font-bold mb-10">Affiliate DashBoard </h1>

                     <div class=" gap-x-20 ">
                        <div className="w-full">
                           <h2 class="text-2xl font-bold mb-4 text-center ">Stats</h2>

                           <div class="grid grid-cols-2 gap-4">
                              <div class="col-span-2">
                                 <div class="p-4 bg-stone-700 rounded-xl">
                                    <div class="font-bold text-xl text-white   leading-none">Good day</div>
                                    <div class="mt-5">
                                       <button type="button" class="inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-green-500 text-sm font-semibold transition">
                                          Start tracking
                                       </button>
                                    </div>
                                 </div>
                              </div>

                                 <div class="p-4 bg-violet-200 rounded-xl text-gray-800">
                                 <div class="font-bold text-2xl leading-none">20</div>
                                 <div class="mt-2">Tasks finished</div>
                              </div>
                              <div class="p-4 bg-stone-800 rounded-xl text-white">
                                 <div class="font-bold text-2xl leading-none">5,5</div>
                                 <div class="mt-2">Tracked hours</div>
                              </div>
                              <div class="col-span-2">
                                 <div class="p-4 bg-stone-500 rounded-xl text-gray-100">
                                    <div class="font-bold text-xl leading-none">Your daily plan</div>
                                    <div class="mt-2">5 of 8 completed</div>
                                 </div>
                              </div>
                           </div>
                        </div>


                        {/* 2 */}
                        

                      
                     </div>
                     

                   
                    

                  </div>
               </div>
            </div>
         </main >
      </body >

   )
}
