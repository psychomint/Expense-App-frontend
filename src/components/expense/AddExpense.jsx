import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";


const AddExpense = () => {
    const navigate = useNavigate();
    const uId = localStorage.getItem("userId");
    const handleSubmit = async(e) =>{
        try{
            e.preventDefault();
            if(uId === null) return;
            const expenseInfo = {
                userId:uId,
                expenseAmount:e.target.expAmnt.value,
                expenseDescription:e.target.expDesc.value,
                expenseCategory:e.target.expCate.value
            }
            const response = await axios.post('http://localhost:3000/expense/addExpense',
                expenseInfo
            );
            console.log(response?.data);
            alert("Expense registered");

        }
        catch(err){
             console.log("Error :", err);
        }
    }

    useEffect(()=>{
    if(uId === null){
        navigate('/user/login');
        return;
    }
    },[uId,navigate]);
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label htmlFor='amnt'>Enter Expense Amount: </label>
                    <input type='number' id='amnt' name='expAmnt'/>
                </div>
                <div>
                    <label htmlFor='desc'>Enter Expense Description: </label>
                    <input type='text' id='desc' name='expDesc'/>
                </div>
                <div>
                    <label htmlFor='cate'>Choose Expense Category: </label>
                    <select name="expCate" id="cate">
                        <option value="food">Food</option>
                        <option value="petrol">Petrol</option>
                        <option value="salary">Salary</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>
                <div className='bg-black text-center rounded-full border-2 border-red-300'>
                    <button className='p-3 font-medium tracking-wide text-white cursor-pointer' type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default AddExpense