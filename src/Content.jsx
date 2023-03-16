import { Login } from "./Login";
import { Profile } from "./Profile";
import { Splash } from "./Splash";
import { Edit } from "./Edit";

import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function Content() {
  const [student, setStudent] = useState({});

  const handleShowProfile = () => {
    axios.get("http://localhost:3000/students/1.json").then((response) => {
      console.log(response.data);
      setStudent(response.data);
    });
  };

  const handleUpdateStudentInfo = (id, params) => {
    console.log(id);
    axios.patch(`http://localhost:3000/students/${id}.json`, params).then((response) => {
      const updatedPost = response.data;
      setStudent(response.data);
    });
  };

  useEffect(handleShowProfile, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Edit onUpdateStudent={handleUpdateStudentInfo} student={student} />} />
      </Routes>
    </div>
  );
}
