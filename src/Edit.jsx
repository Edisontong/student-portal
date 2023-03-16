export function Edit(props) {
  const handleStudentSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);

    props.onUpdateStudent(props.student.id, params);
  };

  return (
    <div className="container">
      <form onSubmit={handleStudentSubmit}>
        <div className="form-group">
          <hr />
          <h3>Student Info</h3>
          <label htmlFor="firstInput">First Name</label>
          <input name="first" type="text" className="form-control" id="firstInput" defaultValue={props.student.first} />
          <label htmlFor="lastInput">Last Name</label>
          <input name="last" type="text" className="form-control" id="lastInput" defaultValue={props.student.last} />
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            defaultValue={props.student.email}
          />
          <label htmlFor="phoneInput">Phone Number</label>
          <input name="phone" type="text" className="form-control" id="phoneInput" defaultValue={props.student.phone} />
          <label htmlFor="bioInput">Bio</label>
          <input name="bio" type="text" className="form-control" id="bioInput" defaultValue={props.student.bio} />
          <label htmlFor="linkedinInput">LinkedIN URL</label>
          <input
            name="linkedin"
            type="text"
            className="form-control"
            id="linkedinInput"
            defaultValue={props.student.linkedin}
          />
          <label htmlFor="twitterInput">Twitter Handle</label>
          <input
            name="twitter"
            type="text"
            className="form-control"
            id="twitterInput"
            defaultValue={props.student.twitter}
          />
          <label htmlFor="websiteInput">Personal Website URL</label>
          <input
            name="website"
            type="text"
            className="form-control"
            id="websiteInput"
            defaultValue={props.student.website}
          />
          <label htmlFor="githubInput">Personal Website URL</label>
          <input
            name="github"
            type="text"
            className="form-control"
            id="githubInput"
            defaultValue={props.student.github}
          />
          <label htmlFor="photoInput">Photo URL</label>
          <input name="photo" type="text" className="form-control" id="photoInput" defaultValue={props.student.photo} />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>

      {props.student.educations?.map((education, x = 0) => {
        return (
          <form key={education.id}>
            <div className="form-group">
              <hr />
              <h3>Education {x + 1}</h3>
              <label htmlFor="startInput">Start Date</label>
              <input type="text" className="form-control" id="startInput" defaultValue={education.start} />
              <label htmlFor="endInput">End Date</label>
              <input type="text" className="form-control" id="endInput" defaultValue={education.start} />
              <label htmlFor="universityInput">School Name</label>
              <input type="text" className="form-control" id="universityInput" defaultValue={education.university} />
              <label htmlFor="degreeInput">Degree</label>
              <input type="text" className="form-control" id="degreeInput" defaultValue={education.details} />
              <label htmlFor="detailsInput">Details</label>
              <input type="text" className="form-control" id="detailsInput" defaultValue={education.details} />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        );
      })}

      {props.student.experiences?.map((experience, x = 0) => {
        return (
          <form key={experience.id}>
            <div className="form-group">
              <hr />
              <h3>Experience {x + 1}</h3>
              <label htmlFor="startInput">Start Date</label>
              <input type="text" className="form-control" id="startInput" defaultValue={experience.start} />
              <label htmlFor="endInput">End Date</label>
              <input type="text" className="form-control" id="endInput" defaultValue={experience.start} />
              <label htmlFor="companyInput">Company Name</label>
              <input type="text" className="form-control" id="companyInput" defaultValue={experience.company} />
              <label htmlFor="titleInput">Job Title</label>
              <input type="text" className="form-control" id="titleInput" defaultValue={experience.details} />
              <label htmlFor="detailsInput">Details</label>
              <input type="text" className="form-control" id="detailsInput" defaultValue={experience.details} />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        );
      })}

      {props.student.capstones?.map((capstone, x = 0) => {
        return (
          <form key={capstone.id}>
            <div className="form-group">
              <hr />
              <h3>Capstone {x + 1}</h3>
              <label htmlFor="nameInput">Name</label>
              <input type="text" className="form-control" id="nameInput" defaultValue={capstone.name} />
              <label htmlFor="descriptionInput">Description</label>
              <input type="text" className="form-control" id="descriptionInput" defaultValue={capstone.description} />
              <label htmlFor="urlInput">URL</label>
              <input type="text" className="form-control" id="urlInput" defaultValue={capstone.url} />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        );
      })}
      <hr />
      <h4>Skills</h4>
      {props.student.skills?.map((skill, x = 0) => {
        return (
          <form key={skill.id}>
            <div className="form-group">
              <label htmlFor="skillNameInput">Name</label>
              <input type="text" className="form-control" id="skillNameInput" defaultValue={skill.name} />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        );
      })}
    </div>
  );
}
