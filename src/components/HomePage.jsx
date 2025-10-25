import { Outlet } from "react-router";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50">
      {/* Branding / Banner */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-blue-600">Welcome to Expense Tracker</h1>
        <p className="text-gray-600">Manage your expenses easily & securely</p>
      </header>

      {/* Auth Components (Login, Signup, etc. will be rendered here) */}
      {/* <main className="w-full max-w-md bg-white shadow-md rounded-lg p-6"> */}
        <Outlet />
      {/* </main> */}

      {/* Footer */}
      <footer className="mt-6 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Expense Tracker. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
