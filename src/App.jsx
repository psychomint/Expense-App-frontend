import Authpage from "./components/auth/Authpage";
import Login from "./components/auth/Login";
import Signup from "./components/auth/signup"
import { BrowserRouter,Routes, Route } from "react-router";

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
            </Routes>
        </BrowserRouter>
        </>
    )
}
