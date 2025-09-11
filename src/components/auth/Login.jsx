import axios from "axios";
import { useNavigate } from "react-router";


const Login = () => {
    const navigate = useNavigate();
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
            localStorage.setItem("userId",response?.data);
            console.log(response?.data);
            alert('Login Sucessfully');
            navigate('/expense');
            
        }
        catch(err){
            console.log("Error :", err);
        }
    }
  return (
    <div className='h-screen  flex justify-center items-center bg-gray-200'>
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