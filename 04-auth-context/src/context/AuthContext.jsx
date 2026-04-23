import { createContext, useReducer } from "react";
import { authReducer, initialAuthState } from "../reducer/authReducer";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(
    authReducer,
    initialAuthState
  );
  const login = (user) => {
    dispatch({
      type: "LOGIN",
      user
    });
  };
  const logout = () => {
    dispatch({
      type: "LOGOUT"
    });
  };
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };