import { Login } from "./Login";
import { Profile } from "./Profile";
import { Splash } from "./Splash";

import { Routes, Route } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
