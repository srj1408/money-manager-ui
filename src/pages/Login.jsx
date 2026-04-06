import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {assets} from "../assets/asset";
import Input from "../components/Input";
import { Link } from "react-router-dom";

const Login = () => {
  const[email,setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[error, setError] = useState(null);

  const navigate = useNavigate();
  return (
    <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">
      <img src={assets.login_bg} alt="Background" className="absolute inset-0 w-full h-full object-cover filter blur-sm"/>
      <div className="relative z-10 w-full max-w-lg px-6">
        <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-h-[90vh] overflow-y-auto">
          <h3 className="tex-2xl font-semibold text-black text-center mb-2">
            Welcome Back
          </h3>
          <p className="text-sm text-slate-700 text-center mb-8">
            Please enter your details to login
          </p>
          <form className="space-y-4">
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              placeholder="name@example.com"
              type="text"
            />
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              placeholder="*********"
              type="password"
            />
            {error && (
              <p className="text-red-800 text-sm text-center bg-red-50 p-2 rounded">
                {error}
              </p>
            )}
            <button type="submit" className="w-full py-3 text-lg font-medium bg-purple-800 text-white rounded-lg hover:bg-purple-900 transition">LOGIN</button>
            <p className="text-sm text-slate-800 text-center mt-6">
              Don't have an account?
              <Link to="/signup" className="font-medium text-purple-800 underline hover:text-purple-900 transition-colors">Signup</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;