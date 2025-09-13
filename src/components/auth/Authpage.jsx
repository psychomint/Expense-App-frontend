import { Outlet } from "react-router";

const Authpage = () => {
   return(
        <div className="min-h-screen bg-gray-200 p-0">
            <h1 className="text-2xl font-bold m-0 text-center">
                Authentication Page
            </h1>
            <Outlet />
            <button>

            </button>
        </div>

    )
}

export default Authpage