import { Login } from "./Login";

import { Routes, Route } from "react-router-dom";

export function Splash() {
  return (
    <div>
      <h1>This is the front page.</h1>
      <Login />
    </div>
  );
}
