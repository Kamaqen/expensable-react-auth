export default function LoginPage({ setUser }) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.elements);
    const { email, password } = event.target.elements;
    const credentials = {
      email: email.value,
      password: password.value,
    };

    login(credentials)
      .then(
        (user) =>
          ```jsx
import { login } from "../services/session-services";

export default function LoginPage({ setUser }) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.elements);
    const { email, password } = event.target.elements;
    const credentials = {
      email: email.value,
      password: password.value
    };

    login(credentials)
      .then((user) => setUser(user))
      .catch((error) => console.log(error));
  }
  return (
    <div>
      ...
    </div>
  );
}
```,
      )
      .catch((error) => console.log(error));
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
