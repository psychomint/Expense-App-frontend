import { Outlet } from "react-router";
import { load } from "@cashfreepayments/cashfree-js";
import axios from "axios";
import { useEffect, useState } from "react";


const Layout = () => {
    const [textPre,setTextPre] = useState('Buy Premium Membership');
    const [isPremium,setIsPremium] = useState(false);
    let cashfree;
    var initializeSDK = async function () {          
        cashfree = await load({
            mode: "sandbox"
        });
    }
    initializeSDK();
    const userId = localStorage.getItem("userId");

    const doPayment = async () => {
        //const userId = localStorage.getItem("userId");
        if(userId == null) {
            alert('Login please');
            return;
        }
        //console.log(userId);
        const response = await axios.post(`http://localhost:3000/payment/pay`,
            {},
            {
                headers:{
                        Authorization: `Bearer ${userId}`
                    }
            }
        );
        console.log(response?.data?.paymentSessionId);
        let checkoutOptions = {
            paymentSessionId: response?.data?.paymentSessionId,
            redirectTarget: "_self",
        };
        await cashfree.checkout(checkoutOptions);
    };

    const verifyPremium = async() => {
        //const userId = localStorage.getItem("userId");
        if(userId == null) {
            alert('Login please');
            return;
        }
        const response = await axios.get(`http://localhost:3000/payment/verify-premium`,
            {
                headers:{
                        Authorization: `Bearer ${userId}`,
                    }
            }
        );
        if(response?.data?.isPremium === true){
            setIsPremium(true);
            setTextPre('You are a premium user now');
            return;
        }
        return;
    }
    useEffect(() => {
        verifyPremium();
    },[userId]);
  return (
    <div >
      {/* Header */}
      <div className="m-10">
            <button
                disabled={isPremium}
                onClick={isPremium ? undefined : doPayment}
                className={`
                    absolute top-5 right-5
                    bg-gradient-to-r from-blue-500 to-indigo-600
                    text-white font-semibold
                    py-3 px-6 rounded-xl
                    shadow-lg hover:shadow-xl
                    transition-all duration-300
                    transform hover:-translate-y-1
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                    ${isPremium ? 'cursor-not-allowed hover:from-blue-600 hover:to-indigo-700' : 'hover:from-blue-600 hover:to-indigo-700'}
                `}
            >
                {textPre}
            </button>
      </div>
      {/* Page content */}
      <main style={{ padding: "20px" }}>
        <Outlet /> {/* Nested routes will render here */}
      </main>
    </div>
  );
};

export default Layout;
