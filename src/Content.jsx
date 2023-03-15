import { useState } from "react";
import { Login } from "./Login";

import { Routes, Route } from "react-router-dom";

export function Content() {
  const logins = [{ id: 1, email: "test@test.com", password: "password" }];
  return (
    <div>
      <h1>Welcome to our resume app!</h1>
      <Routes>
        <Route path="/login" element={<Login logins={logins} />} />
      </Routes>
    </div>
  );
}
