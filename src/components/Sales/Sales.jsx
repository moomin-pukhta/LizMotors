import React from 'react'



function Sales() {
  

  return (
    <>
    <h2 className="text-center bg-blue-200 p-3 font-bold">
        Sales
      </h2>
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
           <h3 className="text-lg font-semibold text-gray-900 dark:text-black">Online Sales</h3>
           <p className="text-base font-normal text-gray-500 dark:text-gray-400">
           In the online sales phase of the car industry, digital platforms facilitate seamless browsing, purchasing, and financing of vehicles, offering consumers convenience and accessibility. This shift towards e-commerce in the automotive sector streamlines the buying process, integrating virtual showrooms and interactive tools to enhance customer experience and expand market reach.




</p>
          
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
           <h3 className="text-lg font-semibold text-gray-900 dark:text-black">Dealership Sales</h3>
           <p className="text-base font-normal text-gray-500 dark:text-gray-400">
           In the dealership sales phase of the car industry, knowledgeable sales professionals guide customers through vehicle options, financing, and after-sales services, fostering personalized buying experiences. These brick-and-mortar establishments provide hands-on demonstrations, test drives, and expertise, cultivating trust and satisfaction among buyers.</p>
           
       </div>
   </li>
</ol>

   </div>
   </>
  )
}

export default Sales
