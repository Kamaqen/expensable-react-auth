import { useContext } from "react";
import { AuthContext } from "../App";
import { logout } from "../services/session-services";

function ProfilePage() {
  const { user, setUser } = useContext(AuthContext);
  function handleLogout() {
    logout()
      .then(() => setUser(null))
      .catch((e) => console.log(e));
  }

  return (
    <div>
      <p>First Name: {user["first_name"]}</p>
      <p>Last Name: {user["last_name"]}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
export default ProfilePage;
