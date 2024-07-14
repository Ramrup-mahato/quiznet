import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const GoogleLoginButton = ({ handleGoogleSuccess, text }) => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <p className="border-t text-slate-500 border-gray-500 w-full text-center">
        or
      </p>

      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENTID}>
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          text={text}
          width="100%"
          size="large"
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default GoogleLoginButton;
