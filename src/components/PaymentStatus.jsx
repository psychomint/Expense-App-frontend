
import { useLocation } from "react-router";

const PaymentStatus = () => {
  const location = useLocation();

  // Parse query params
  const queryParams = new URLSearchParams(location.search);
  const orderId = queryParams.get("orderId");
  const status = queryParams.get("status");

  let bgColor = "";
  let text = "";

  if (status === "Success") {
    bgColor = "bg-green-100 text-green-700 border-green-400";
    text = "✅ Payment Successful";
  } else if (status === "Pending") {
    bgColor = "bg-yellow-100 text-yellow-700 border-yellow-400";
    text = "⏳ Payment Pending";
  } else {
    bgColor = "bg-red-100 text-red-700 border-red-400";
    text = "❌ Payment Failed";
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-2xl font-bold">Payment Status</h1>
      <div
        className={`border p-4 rounded-lg text-center text-lg font-semibold ${bgColor}`}
      >
        {text}
      </div>
      {orderId && (
        <p className="text-gray-600 text-sm">Order ID: {orderId}</p>
      )}
    </div>
  );
};

export default PaymentStatus;
