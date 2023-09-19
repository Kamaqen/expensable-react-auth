import { createContext, useEffect, useState } from "react";
import LoginPage from "./pages/login-page";
import ProfilePage from "./pages/profile-page";
import { getUser } from "./services/user-services";

export const AuthContext = createContext({});

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser()
      .then((u) => setUser(u))
      .catch((error) => console.log(error));
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {user ? <ProfilePage /> : <LoginPage />}
    </AuthContext.Provider>
  );
}
