import { Outlet } from "react-router";
import { load } from "@cashfreepayments/cashfree-js";
import axios from "axios";

const Authpage = () => {
    let cashfree;
    var initializeSDK = async function () {          
        cashfree = await load({
            mode: "sandbox"
        });
    }
    initializeSDK();

    const doPayment = async () => {
        const response = await axios.post("http://localhost:3000/payment/pay")
        console.log(response?.data?.paymentSessionId);
        let checkoutOptions = {
            paymentSessionId: response?.data?.paymentSessionId,
            redirectTarget: "_self",
        };
        await cashfree.checkout(checkoutOptions);
    };
   return(
        <div className="min-h-screen bg-gray-200 p-0">
            <h1 className="text-2xl font-bold m-0 text-center">
                Authentication Page
            </h1>
            <button
            className="absolute top-5 right-5 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded cursor-pointer"
            onClick={doPayment}
            >
            Buy Premium Membership
            </button>

            <Outlet />
        </div>

    )
}

export default Authpage