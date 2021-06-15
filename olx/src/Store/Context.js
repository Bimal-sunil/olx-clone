import { createContext, useState } from "react";

// Firebase context
export const FirebaseContext = createContext(null);

// Context for checking logged or not
export const AuthenticateUser = createContext(null);

// use this context in the following fn
function Context(props) {
  const { children } = props;
  const [user, setUser] = useState(false);
  return (
    <AuthenticateUser.Provider value={{ user, setUser }}>
      {children}
    </AuthenticateUser.Provider>
  );
}

export default Context;
