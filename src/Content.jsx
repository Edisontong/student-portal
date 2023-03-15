import { Login } from "./Login";
import { Profile } from "./Profile";

export function Content() {
  return (
    <div>
      <Login />
      <h1>Welcome to RESUMER!</h1>
      <Profile />
    </div>
  );
}
