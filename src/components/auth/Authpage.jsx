import { Outlet } from "react-router";

const Authpage = () => {
   return(
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">
                Authentication Page
            </h1>
            <Outlet />
        </div>

    )
}

export default Authpage