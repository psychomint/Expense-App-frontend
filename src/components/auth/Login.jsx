import axios from "axios";


const Login = () => {
    const handlSubmitBtn = async (e) => {
        try{
            e.preventDefault();
            const loginDeatails = {
                email:e.target.email.value,
                password:e.target.password.value
            }
            const response = await axios.post("http://localhost:3000/user/login",
                loginDeatails
            )
            console.log(response);
        }
        catch(err){
            console.log("Error :", err);
        }
    }
  return (
    <div className='h-screen border-2 border-red-500 flex justify-center items-center bg-gray-200'>
        <form onSubmit={handlSubmitBtn}>
            <div className='flex flex-col gap-4 p-5 rounded-2xl shadow-2xl bg-cyan-200'>
                <div className='flex gap-1'>
                    <label className='font-medium tracking-wide'  htmlFor="email">Email: </label>
                    <input className='border-2 border-amber-300 rounded-md basis-full' type="email" id="email" name="userEmail" required/>
                </div>
                <div className='flex gap-1'>
                    <label className='font-medium tracking-wide'  htmlFor="password">Password: </label>
                    <input className='border-2 border-amber-300 rounded-md basis-full' type="password" id="password" name="userPassword" required/>
                </div>
                <div className='bg-black text-center rounded-full border-2 border-red-300'>
                    <button className='p-3 font-medium tracking-wide text-white cursor-pointer' type='submit'>Login</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Login