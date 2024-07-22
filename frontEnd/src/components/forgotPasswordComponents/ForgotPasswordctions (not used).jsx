// import React, { useState } from 'react';
// import axios from 'axios';

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem('token'); // Retrieve token from local storage

//       const response = await axios.post(
//         'http://localhost:4000/api/v1/users/forgot-password',
//         { email },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Include token in request headers
//           },
//         }
//       );
//       setMessage(response.data.message);
//     } catch (error) {
//       setMessage(error.response.data.error);
//     }
//   };

//   return (
//     <div>
//       <h2>Forgot Password</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button type="submit">Reset Password</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default ForgotPassword;
