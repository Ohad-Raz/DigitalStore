import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
const SignIn = () => {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:4000/api/v1/users/SignIn",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        const { token, user } = data;
        localStorage.setItem("token", token);
        setUser(user);
        console.log(data);
        console.log(token);
        console.log(user);
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error("Signin error:", error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign In</button>
    </form>
  );
};
export default SignIn;