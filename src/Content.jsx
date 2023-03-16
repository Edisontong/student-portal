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
    axios.get("http://localhost:3000/students/2.json").then((response) => {
      console.log(response.data);
      setStudent(response.data);
    });
  };

  useEffect(handleShowProfile, []);

  let student1 = {
    first: "Nick",
    last: "Gonzalez",
    email: "nick@email.com",
    phone: "7732099441",
    bio: "I am a student (:",
    linkedin: "linkedin.com",
    twitter: "twitter.com",
    website: "google.com",
    github: "github.com",
    photo: "google.com",
    experiences: [
      {
        id: 1,
        start: "01/01/01",
        end: "02/02/02",
        title: "Bossman",
        company: "Apple",
        details: "BLAHBLAHBLAH",
        created_at: "2023-03-16T15:36:20.313Z",
        updated_at: "2023-03-16T15:36:20.313Z",
        student_id: 1,
      },
      {
        id: 3,
        start: "11/11/11",
        end: "12/12/12",
        title: "Peon",
        company: "Boeing",
        details: "BLAHBLAHBLAH",
        created_at: "2023-03-16T15:36:20.318Z",
        updated_at: "2023-03-16T15:36:20.318Z",
        student_id: 1,
      },
    ],
    educations: [
      {
        id: 1,
        start: "01/01/01",
        end: "02/02/02",
        degree: "Animology",
        university: "Harvard",
        details: "BLAHBLAHBLAH",
        created_at: "2023-03-16T15:36:20.294Z",
        updated_at: "2023-03-16T15:36:20.294Z",
        student_id: 1,
      },
      {
        id: 3,
        start: "01/01/01",
        end: "05/05/05",
        degree: "Crime",
        university: "The Streets",
        details: "BLAHBLAHBLAH",
        created_at: "2023-03-16T15:36:20.300Z",
        updated_at: "2023-03-16T15:36:20.300Z",
        student_id: 1,
      },
    ],
    capstones: [
      {
        id: 1,
        name: "captsone1",
        description: "It's an app",
        url: "website.com",
        created_at: "2023-03-16T15:36:20.350Z",
        updated_at: "2023-03-16T15:36:20.350Z",
        student_id: 1,
      },
    ],
    skills: [
      {
        id: 1,
        name: "making bank",
        created_at: "2023-03-16T15:36:20.329Z",
        updated_at: "2023-03-16T15:36:20.329Z",
        student_id: 1,
      },
      {
        id: 2,
        name: "taking care of business",
        created_at: "2023-03-16T15:36:20.332Z",
        updated_at: "2023-03-16T15:36:20.332Z",
        student_id: 1,
      },
      {
        id: 3,
        name: "decisions",
        created_at: "2023-03-16T15:36:20.334Z",
        updated_at: "2023-03-16T15:36:20.334Z",
        student_id: 1,
      },
    ],
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Edit student={student} />} />
      </Routes>
    </div>
  );
}
