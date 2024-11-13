import React, { useState } from "react";

const LoginPage = () => {
  const [isRegister, setIsRegister] = useState(false); // Toggle between login and register
  const [email, setEmail] = useState(""); // Email state
  const [isEmailValid, setIsEmailValid] = useState(true); // Email validation state

  // Toggle the form view between login and register
  const toggleForm = () => {
    setIsRegister(!isRegister);
    setIsEmailValid(true); // Reset email validation state
    setEmail(""); // Reset email input
  };

  // Validate email using regex pattern
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsEmailValid(validateEmail(inputEmail)); // Update email validation state
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 text-white">
      {/* Background Overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-950 via-gray-900 to-gray-800 backdrop-blur-sm" />
      </div>

      {/* Login/Register Card */}
      <div className="z-10 w-full max-w-sm px-6 py-8 bg-gray-800 rounded-lg shadow-2xl">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {isRegister ? "Register" : "Login"}
        </h2>

        <form>
          {/* Email Field with Validation */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            {!isEmailValid && (
              <p className="text-red-500 text-sm mb-1">Invalid email address</p>
            )}
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className={`w-full px-4 py-2 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 ${
                isEmailValid ? "focus:ring-blue-800" : "border-2 border-red-500"
              }`}
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
              placeholder="Enter your password"
            />
          </div>

          {/* Confirm Password Field (Visible only in Register Form) */}
          {isRegister && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                placeholder="Confirm your password"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-800 rounded-lg hover:bg-blue-700 transition"
          >
            {isRegister ? "Register" : "Login"}
          </button>
        </form>

        {/* Toggle Login/Register */}
        <div className="mt-6 text-center">
          {isRegister ? (
            <p>
              Already have an account?{" "}
              <button
                onClick={toggleForm}
                className="text-blue-400 hover:text-blue-500 transition"
              >
                Login
              </button>
            </p>
          ) : (
            <p>
              Don't have an account?{" "}
              <button
                onClick={toggleForm}
                className="text-blue-400 hover:text-blue-300 transition"
              >
                Register
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
