// // pages/verify.tsx
// import React, { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { VERIFY_MUTATION } from "../graphql/mutations"; // Import your GraphQL verify mutation

// const Verify = () => {
//   const [verify, { data, loading, error }] = useMutation(VERIFY_MUTATION);
//   const [verificationCode, setVerificationCode] = useState("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setVerificationCode(e.target.value);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await verify({ variables: { code: verificationCode } });
//       // Handle successful verification (e.g., show success message, redirect)
//     } catch (err) {
//       // Handle error
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
//       >
//         {/* Verification code field */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="code"
//           >
//             Verification Code
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="code"
//             name="code"
//             type="text"
//             placeholder="Enter your code"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Verify
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Verify;
export {};
