import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
const Register = () => {
  const { setUser } = useContext(UserContext);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [specialty, setSpecialty] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/v1/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password, role, specialty }),
      });
      const data = await response.json();
      if (response.ok) {
        const { token, user } = data;
        localStorage.setItem('token', token);
        setUser(user);
        console.log(user);
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error('Signup error:', error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">Select Role</option>
        <option value="admin">Admin</option>
        <option value="Contractor">Contractor</option>
        <option value="Client">Client</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};
export default Register;