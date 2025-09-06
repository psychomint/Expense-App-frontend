import React from 'react'

const Signup = () => {
    const onSubmitHandle = (e) => {
        e.preventDefault();
        console.log("Form Submitted",e.target.userName.value);
    }
  return (
    <div className='h-screen border-2 border-red-500 flex justify-center items-center bg-gray-200'>
        <form onSubmit={onSubmitHandle}>
            <div className='flex flex-col gap-4 p-5 rounded-2xl shadow-2xl bg-cyan-200'>
                <div className='flex gap-1'>
                    <label className='font-medium tracking-wide' htmlFor="name">Name: </label>
                    <input className='border-2 border-amber-300 rounded-md basis-full' type="text" id="name" name="userName" required/>
                </div>
                <div className='flex gap-1'>
                    <label className='font-medium tracking-wide'  htmlFor="email">Email: </label>
                    <input className='border-2 border-amber-300 rounded-md basis-full' type="email" id="email" name="userEmail" required/>
                </div>
                <div className='flex gap-1'>
                    <label className='font-medium tracking-wide'  htmlFor="password">Password: </label>
                    <input className='border-2 border-amber-300 rounded-md basis-full' type="password" id="password" name="userPassword" required/>
                </div>
                <div className='bg-black text-center rounded-full border-2 border-red-300'>
                    <button className='p-3 font-medium tracking-wide text-white cursor-pointer' type='submit'>Signup</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Signup;