import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); 
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post("http://localhost:3000/api/auth/login", {
                email: email,
                password: password,
            });
            console.log(response.data);
            if (response.data.success) {
                await login(response.data.user, response.data.token, );
                if(response.data.user.role === "admin"){
                    navigate("/admin-dashboard");
                }else{
                    navigate("/customer-dashboard");
                }

                
            }else {
                alert(response.data.error);
            }

        } catch (error) {
            if(error.response){
                setError(error.response.data.message);
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4">
            <div className="text-2xl font-bold text-white text-center mb-6">
                <div>Logo</div>
                <h2>Sign in to your account</h2>
            </div>

            <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-lg">
                {error && <div className="mb-4 p-3 bg-red-600 text-white rounded">{error}</div>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-base font-semibold text-gray-300 mb-2">Email address</label>
                        <input
                            className="w-full px-4 py-1 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-base font-semibold text-gray-300 mb-2">Password</label>
                        <input
                            className="w-full px-4 py-1 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-1 bg-blue-600 hover:bg-blue-800 text-white font-semibold rounded disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Signing in..." : "Sign in"}
                        </button>

                    </div>
                </form>

                <div className="flex items-center my-9">
                    <div className="flex-grow h-px bg-gray-600"></div>
                    <div className="px-4 text-center text-white text-sm font-normal">
                        <p>Or continue with</p>
                    </div>
                    <div className="flex-grow h-px bg-gray-600"></div>
                </div>

                <div className="mt-4 flex flex-col flex-col-reverse justify-center space-y-4 space-y-reverse sm:flex-row sm:space-y-0 sm:space-x-5">
                    <button className="flex items-center px-4 py-2 bg-gray-700 text-white font-semibold rounded hover:bg-gray-600">
                        <img src="../images/google.svg" alt="Google" className="w-5 h-5 mr-2" />
                        <a href="https://www.mail.google.com" target="_blank" rel="noopener noreferrer">Google</a>
                    </button>
                    <button className="flex items-center px-4 py-2 bg-gray-700 text-white font-semibold rounded hover:bg-gray-600">
                        <img src="../images/twitter.svg" alt="Twitter" className="w-5 h-5 mr-2" />
                        <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </button>
                    <button className="flex items-center px-4 py-2 bg-gray-700 text-white font-semibold rounded hover:bg-gray-600">
                        <img src="../images/facebook.svg" alt="Facebook" className="w-5 h-5 mr-2" />
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
                    </button>
                </div>
            </div>
        </div>


    )
}

export default Login;

