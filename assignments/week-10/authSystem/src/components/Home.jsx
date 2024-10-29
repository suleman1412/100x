/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Home = ({ 
  useContextAPI, 
  onStateLiftingLogout 
}) => {
  const { logout: contextLogout } = useContext(AuthContext);

  const handleLogout = () => {
    useContextAPI 
      ? contextLogout()
      : onStateLiftingLogout();
  };

  return (
    <div>
      <h2>Home {useContextAPI ? '(Context API)' : '(State Lifting)'}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;