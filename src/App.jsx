import Authpage from "./components/auth/Authpage";
import Login from "./components/auth/Login";
import Signup from "./components/auth/signup"
import { BrowserRouter,Routes, Route } from "react-router";
import AddExpense from "./components/expense/AddExpense";
import ManageExpenses from "./components/expense/ManageExpenses";
// import PaymentStatus from "./components/PaymentStatus";
import ForgetPassword from "./components/auth/ForgetPassword";
import ForgetChangePassword from "./components/auth/forgetChangePassword";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";

export default function App () {
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="user" element={<Authpage/>}>
                        <Route index element={<Login/>}/>
                        <Route path="signup" element={<Signup/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="forgot-password" element={<ForgetPassword/>}/>
                        <Route path="forget-change-password/:id" element={<ForgetChangePassword/>}/>
                    </Route>
                    <Route path="expense">
                        <Route index element={<Dashboard/>}/>
                        <Route path="addExpense" element={<AddExpense/>}/>
                        <Route path="ManageExpenses" element={<ManageExpenses/>}/>
                    </Route>
                </Route>    
            </Routes>
        </BrowserRouter>
        </>
    )
}
