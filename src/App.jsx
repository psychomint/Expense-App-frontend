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
import RequireAuth from "./components/auth/RequirePath";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";

export default function App () {
    const dummyUser = {
        name: "John Doe",
        email: "john@example.com",
        totalExpense: 2499.75,
        isPremium: true,
        created_at: "2024-10-12T14:48:00.000Z",
    };
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}>
                    <Route >
                        <Route path="user" element={<Authpage/>}>
                            <Route index element={<Login/>}/>
                            <Route path="signup" element={<Signup/>}/>
                            <Route path="login" element={<Login/>}/>
                            <Route path="forgot-password" element={<ForgetPassword/>}/>
                            <Route path="forget-change-password/:id" element={<ForgetChangePassword/>}/>
                            <Route path="profile" element={<Profile user={dummyUser}/>}/>
                        </Route>
                    </Route>
                    <Route >
                        <Route path="expense">
                            <Route index element={<Dashboard/>}/>
                            <Route path="addExpense" element={<AddExpense/>}/>
                            <Route path="ManageExpenses" element={<ManageExpenses/>}/>
                        </Route>
                    </Route>
                </Route>    
            </Routes>
        </BrowserRouter>
        </>
    )
}
