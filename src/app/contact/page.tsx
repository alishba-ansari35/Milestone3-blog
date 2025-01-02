import React from 'react'

const Contactpage = () => {
  return (


<div className='p-5 text-center bg-neutral-50'>
<h2 className='text-5xl font-serif underline  decoration-black text-black my-3'>Contact Us</h2>
<p className="lg:w-2/3 mx-auto leading-relaxed text-base ">Please fill this form if you have any queries and complains or if you have any messages for us.</p>

<div className='flex justify-center flex-wrap gap-5 my-3'> 
<div className='border-2 border-black rounded-lg p-2 w-[450px] h-[450px] 
text-center transition-transform duration-300 hover:scale-105'>

<form action="">

<label htmlFor="" className=' text-xl block mb-5 text-black font-serif'>Full Name</label>
<input className='w-[100%] p-3 mb-2 border-2 border-black rounded-xl text-center' type="text"  placeholder='Enter your full name'/>

<label htmlFor="" className=' text-xl block mb-5 text-black font-serif'>Email Address</label>
<input  className='w-[100%] p-3 mb-2 border-2 border-black rounded-xl text-center' type="text"  placeholder='Enter your email address'/>

<label htmlFor="" className=' text-xl block mb-5 text-black font-serif'>Contact Number</label>
<input  className='w-[100%] p-3 mb-2 border-2 border-black rounded-xl text-center' type="text"  placeholder='Enter your contact number'/>


<button className='w-[100px] hover:bg-white hover:text-black bg-black text-white text-xl font-serif  p-3 mt-4 border-2 border-black rounded-xl text-center' type="submit">Submit</button>

</form>

  </div>
  </div>





</div>
  )
}

export default Contactpage
