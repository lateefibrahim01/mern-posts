import React from 'react';
import { useDispatch } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { loginUser } from '../features/authSlice';

const LoginPage = () => {
  const dispatch = useDispatch();

  const responseGoogle = (response) => {
    // Response object will contain user information after successful Google login
    const { tokenId } = response;
    dispatch(loginUser(tokenId));
  };

  const responseGoogleFailure = (error) => {
    console.log('Google login failed:', error);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold mb-4">Login Page</h1>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogleFailure}
        cookiePolicy={'single_host_origin'}
        className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 cursor-pointer"
      />
    </div>
  );
};

export default LoginPage;
