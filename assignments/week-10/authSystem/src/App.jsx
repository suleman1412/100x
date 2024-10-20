import { useState, useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import AppBar from "./components/AppBar";
import Home from "./components/Home";
import Login from "./components/Login";

const App = () => {
  const [stateLiftingUser, setStateLiftingUser] = useState({ username: "", password: "" });
  const [stateLiftingIsLogin, setStateLiftingIsLogin] = useState(false);

  const { 
    user: contextUser, 
    isLogin: contextIsLogin, 
    useContextAPI,
    setUseContextAPI 
  } = useContext(AuthContext);

  const handleStateLiftingLogin = (userData) => {
    setStateLiftingUser(userData);
    setStateLiftingIsLogin(true);
  };

  const handleStateLiftingLogout = () => {
    setStateLiftingUser({ username: "", password: "" });
    setStateLiftingIsLogin(false);
  };

  const isLoggedIn = useContextAPI ? contextIsLogin : stateLiftingIsLogin;
  const currentUser = useContextAPI ? contextUser : stateLiftingUser;

  return (
    <div>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        margin: '20px'
      }}>
        <label>
          <input 
            type="checkbox"
            checked={useContextAPI}
            onChange={() => setUseContextAPI(!useContextAPI)}
          />
          Use Context API
        </label>
      </div>

      {isLoggedIn ? (
        <>
          <AppBar 
            username={currentUser.username}
            useContextAPI={useContextAPI}
          />
          <Home 
            useContextAPI={useContextAPI}
            onStateLiftingLogout={handleStateLiftingLogout}
          />
        </>
      ) : (
        <Login 
          useContextAPI={useContextAPI}
          onStateLiftingLogin={handleStateLiftingLogin}
        />
      )}
    </div>
  );
};

export default App;