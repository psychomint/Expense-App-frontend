

const AddExpense = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        const expenseInfo = {
            expenseAmount:e.target.expAmnt.value,
            expenseDescription:e.target.expDesc.value,
            expenseCategory:e.target.expCate.value
        }
        console.log(expenseInfo);
    }
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