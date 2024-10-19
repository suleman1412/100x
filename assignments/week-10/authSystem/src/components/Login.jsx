import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = ({ 
  useContextAPI, 
  onStateLiftingLogin 
}) => {
  const [credentials, setCredentials] = useState({ 
    username: "", 
    password: "" 
  });

  const { login: contextLogin } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (credentials.username === "suleman") {
      useContextAPI 
        ? contextLogin(credentials)
        : onStateLiftingLogin(credentials);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login {useContextAPI ? '(Context API)' : '(State Lifting)'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;