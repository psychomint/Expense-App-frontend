import { Outlet } from "react-router";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center bg-gray-50">
      {/* Branding / Banner */}
      {/* <header className="border-4 border-red-500 mb-8 text-center">
        <h1 className="text-3xl font-bold text-blue-600">Welcome to Expense Tracker</h1>
        <p className="text-gray-600">Manage your expenses easily & securely</p>
      </header> */}
      <Navbar/>
      {/* <Outlet /> */}
      {/* Auth Components (Login, Signup, etc. will be rendered here) */}
      {/* <main className="w-full max-w-md bg-white shadow-md rounded-lg p-6"> */}
      <div className="">
         <Outlet />
      </div>
       
      {/* </main> */}

      {/* Footer */}
      <footer className="border-4 border-red-500 mt-6 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Expense Tracker. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
