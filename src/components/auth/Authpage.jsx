import { Outlet } from "react-router";

const Authpage = () => {
   return(
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#12d24c] via-[#68de9d] to-[#12a425] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
            <Outlet />
        </div>

    )
}

export default Authpage