import { useParams } from "react-router-dom";

export function Edit(props) {
  let id = useParams();
  props.setStudentID(id.id);

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
          <input
            name="first_name"
            type="text"
            className="form-control"
            id="firstInput"
            defaultValue={props.student.first_name}
          />
          <label htmlFor="lastInput">Last Name</label>
          <input
            name="last_name"
            type="text"
            className="form-control"
            id="lastInput"
            defaultValue={props.student.last_name}
          />
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
          <input
            name="phone_number"
            type="text"
            className="form-control"
            id="phoneInput"
            defaultValue={props.student.phone_number}
          />
          <label htmlFor="bioInput">Bio</label>
          <input
            name="short_bio"
            type="text"
            className="form-control"
            id="bioInput"
            defaultValue={props.student.short_bio}
          />
          <label htmlFor="linkedinInput">LinkedIN URL</label>
          <input
            name="linkedin_url"
            type="text"
            className="form-control"
            id="linkedinInput"
            defaultValue={props.student.linkedin_url}
          />
          <label htmlFor="twitterInput">Twitter Handle</label>
          <input
            name="twitter_handle"
            type="text"
            className="form-control"
            id="twitterInput"
            defaultValue={props.student.twitter_handle}
          />
          <label htmlFor="websiteInput">Personal Website URL</label>
          <input
            name="personal_blog_website_url"
            type="text"
            className="form-control"
            id="websiteInput"
            defaultValue={props.student.personal_blog_website_url}
          />
          <label htmlFor="githubInput">Github URL</label>
          <input
            name="github_url"
            type="text"
            className="form-control"
            id="githubInput"
            defaultValue={props.student.github_url}
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
              <input
                name="start_date"
                type="text"
                className="form-control"
                id="startInput"
                defaultValue={education.start_date}
              />
              <label htmlFor="endInput">End Date</label>
              <input
                name="end_date"
                type="text"
                className="form-control"
                id="endInput"
                defaultValue={education.end_date}
              />
              <label htmlFor="universityInput">School Name</label>
              <input
                name="university_name"
                type="text"
                className="form-control"
                id="universityInput"
                defaultValue={education.university_name}
              />
              <label htmlFor="degreeInput">Degree</label>
              <input
                name="degree"
                type="text"
                className="form-control"
                id="degreeInput"
                defaultValue={education.degree}
              />
              <label htmlFor="detailsInput">Details</label>
              <input
                name="details"
                type="text"
                className="form-control"
                id="detailsInput"
                defaultValue={education.details}
              />
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
              <input
                name="start_date"
                type="text"
                className="form-control"
                id="startInput"
                defaultValue={experience.start_date}
              />
              <label htmlFor="endInput">End Date</label>
              <input
                name="end_date"
                type="text"
                className="form-control"
                id="endInput"
                defaultValue={experience.end_date}
              />
              <label htmlFor="companyInput">Company Name</label>
              <input
                name="company_name"
                type="text"
                className="form-control"
                id="companyInput"
                defaultValue={experience.company_name}
              />
              <label htmlFor="titleInput">Job Title</label>
              <input
                name="job_title"
                type="text"
                className="form-control"
                id="titleInput"
                defaultValue={experience.job_title}
              />
              <label htmlFor="detailsInput">Details</label>
              <input
                name="details"
                type="text"
                className="form-control"
                id="detailsInput"
                defaultValue={experience.details}
              />
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
              <input name="name" type="text" className="form-control" id="nameInput" defaultValue={capstone.name} />
              <label htmlFor="descriptionInput">Description</label>
              <input
                name="description"
                type="text"
                className="form-control"
                id="descriptionInput"
                defaultValue={capstone.description}
              />
              <label htmlFor="urlInput">URL</label>
              <input name="url" type="text" className="form-control" id="urlInput" defaultValue={capstone.url} />
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
