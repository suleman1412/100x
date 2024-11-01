import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const AppBar = ({ 
  username, 
  useContextAPI 
}) => {
  const { user: contextUser } = useContext(AuthContext);

  return (
    <div>
      <h1>AppBar {useContextAPI ? '(Context API)' : '(State Lifting)'}</h1>
      <p>Welcome, {username || contextUser.username}!</p>
    </div>
  );
};

export default AppBar;