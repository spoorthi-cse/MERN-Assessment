import React, { useState } from "react";
import axios from "axios";

function Login({ setToken }) {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isRegister ? "http://localhost:5000/api/register" : "http://localhost:5000/api/login";
    
    try {
      const res = await axios.post(url, form);
      alert(res.data.message);
      // Optionally save token if using auth
      if (res.data.token) {
        setToken(res.data.token);
      }
    } catch (err) {
      alert("❌ Error: " + err.response?.data?.error || err.message);
    }
  };

  return (
    <div>
      <h2>{isRegister ? "Register" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" value={form.username} onChange={handleChange} placeholder="Username" />
        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" />
        <button type="submit">{isRegister ? "Register" : "Login"}</button>
      </form>
      <button onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? "Switch to Login" : "Switch to Register"}
      </button>
    </div>
  );
}

export default Login;
