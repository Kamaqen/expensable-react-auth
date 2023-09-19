import { useEffect, useState } from "react";
import LoginPage from "./pages/login-page";
import { getUser } from "./services/user-services";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser()
      .then((u) => setUser(u))
      .catch((error) => console.log(error));
  }, []);

  return user ? <p>User logged</p> : <LoginPage setUser={setUser} />;
}
