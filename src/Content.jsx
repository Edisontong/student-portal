import { useState } from "react";
import { Login } from "./Login";
import { Profile } from "./Profile";
import { Routes, Route } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function Content() {
  return (
    <div>
      <h1>Welcome to our resume app!</h1>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
