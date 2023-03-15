import { Login } from "./Login";

export function Content() {
  const logins = [{ id: 1, email: "test@test.com", password: "password" }];
  return (
    <div>
      <Login logins={logins} />
      <h1>Welcome to our resume app!</h1>
    </div>
  );
}
