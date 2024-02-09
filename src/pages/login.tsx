// pages/login.tsx
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../graphql/mutations";
import { useRouter } from "next/router";

const Login = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [popupMessage, setPopupMessage] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await login({ variables: { input: formData } });

      // Assuming the mutation result contains a field 'data' with the user's information on success
      if (
        result.data &&
        result.data.login == "Approval pending! Try after some time"
      ) {
        setPopupMessage("Approval Pending! Try after some time.");
        // Here you can redirect or perform other actions as needed
        // router.push("/verify");
      } else if (result.data && result.data.login == "User Not Found") {
        setPopupMessage("User not found");
      } else if (result.data && result.data.login == "InCorrect Password") {
        setPopupMessage("InCorrect Password");
      } else {
        router.push("/verify");
      }
    } catch (err) {
      console.error("Error logging in:", err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        {/* Email field */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        {/* Password field */}
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={() => console.log("Button clicked")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log In
          </button>
        </div>
        {popupMessage && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg shadow-lg">
              <p>{popupMessage}</p>
              <button
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setPopupMessage("")}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
//export {};
