import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { userStore } from "../../store/userStore";

const BASE_URL = "https://jewelleryapp.onrender.com/auth";

const PhoneLogin = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();
  const setToken = userStore((state) => state.setUserToken);
  const setUserData = userStore((state) => state.setUserData);

  const sendOTP = async () => {
    if (!phone) return toast.error("Enter phone number first");

    try {
      const res = await fetch(`${BASE_URL}/send-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone }),
      });

      const data = await res.json();

      console.log("send otp " + JSON.stringify(data));

      if (res.ok) {
        toast.success("OTP sent to your phone");
        setOtpSent(true);
      } else {
        toast.error(data.message || "Failed to send OTP");
      }
    } catch (error) {
      toast.error("Something went wrong while sending OTP");
      console.error(error);
    }
  };

  const verifyOTP = async () => {
    if (!otp) return toast.error("Enter the OTP");

    try {
      const res = await fetch(`${BASE_URL}/verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone, otp }),
      });

      const data = await res.json();

      console.log("verify otp " + JSON.stringify(data, null, 2));

      // {
      //   "message": "OTP verified successfully",
      //   "user": {
      //     "_id": "67f3c79a3884d518177faff7",
      //     "phone": "+919798316854",
      //     "isVerified": true,
      //     "otpVerification": {
      //       "verified": true,
      //       "lastVerifiedAt": "2025-04-25T11:12:31.100Z"
      //     }
      //   },
      //   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2YzYzc5YTM4ODRkNTE4MTc3ZmFmZjciLCJpYXQiOjE3NDU1Nzk1NTEsImV4cCI6MTc0NTU4Njc1MX0.LrdjmMgy-12u_IOv0_-TFfG_yyNX40AliaRM9a1-GjY"
      // }

      if (res.ok) {
        toast.success("OTP verified!");
        localStorage.setItem("token", data?.token);

        setToken(data?.token);
        const userObj = {
          token: data?.token,
          ...data?.user,
        };
        setUserData(userObj);

        // Save token if needed: localStorage.setItem("token", data.token);
        setTimeout(() => navigate("/shop"), 1500);
      } else {
        toast.error(data.message || "Invalid OTP");
      }
    } catch (error) {
      toast.error("Something went wrong during verification");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Toaster />
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-center mb-6">
          Phone Number Login
        </h2>

        <input
          type="text"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-md"
        />

        {otpSent && (
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded-md"
          />
        )}

        {!otpSent ? (
          <button
            onClick={sendOTP}
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Send OTP
          </button>
        ) : (
          <button
            onClick={verifyOTP}
            className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Verify OTP
          </button>
        )}

        <div className="mt-4 text-center">
          <button
            onClick={() => navigate(-1)}
            className="text-gray-600 hover:underline"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneLogin;
