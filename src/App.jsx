import Authpage from "./components/auth/Authpage";
import Login from "./components/auth/Login";
import Signup from "./components/auth/signup"
import { BrowserRouter,Routes, Route } from "react-router";
import AddExpense from "./components/expense/AddExpense";
import ManageExpenses from "./components/expense/ManageExpenses";
import PaymentStatus from "./components/PaymentStatus";

export default function App () {
    return(
        <>
        <BrowserRouter>
            <Routes>
                 <Route path="user" element={<Authpage/>}>
                    <Route index element={<Login/>}/>
                    <Route path="signup" element={<Signup/>}/>
                    <Route path="login" element={<Login/>}/>
                </Route>
                 <Route path="expense">
                    <Route index element={<ManageExpenses/>}/>
                    <Route path="addExpense" element={<AddExpense/>}/>
                    <Route path="ManageExpenses" element={<ManageExpenses/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}
