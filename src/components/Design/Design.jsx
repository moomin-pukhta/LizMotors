import React from 'react'



function Design() {
  

  return (
    <div className='p-10'>
    <ol className="items-center sm:flex">
   <li className="relative mb-6 sm:mb-0">
       <div className="flex items-center">
           <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
               <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
               </svg>
           </div>
           <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
       </div>
       <div className="mt-3 sm:pe-8">
           <h3 className="text-lg font-semibold text-gray-900 dark:text-black">Software Design</h3>
           <p className="text-base font-normal text-gray-500 dark:text-gray-400">In the software design phase of the car industry, teams focus on creating and integrating software systems that control various vehicle functions, from engine management to infotainment and autonomous driving features. This stage requires a deep understanding of software architecture and user experience, ensuring that the software not only enhances vehicle performance and safety but also meets the evolving expectations of modern drivers.</p>
          
       </div>
   </li>
   <li className="relative mb-6 sm:mb-0">
       <div className="flex items-center">
           <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
               <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
               </svg>
           </div>
           <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
       </div>
       <div className="mt-3 sm:pe-8">
           <h3 className="text-lg font-semibold text-gray-900 dark:text-black">Hardware Design</h3>
           <p className="text-base font-normal text-gray-500 dark:text-gray-400">
In the hardware design phase of the car industry, engineers and designers collaborate to create detailed blueprints and prototypes for each physical component, from the chassis and bodywork to the engine and interior systems. This phase transforms conceptual and specification plans into tangible, testable hardware, integrating aesthetics with functionality while prioritizing safety, efficiency, and manufacturability.</p>
           
       </div>
   </li>
</ol>

   </div>
  )
}

export default Design
