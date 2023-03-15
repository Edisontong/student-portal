export function Profile() {
  return (
    <div>
      <h1>User Profile Name</h1>
      <div className="container">
        <div className="row">
          <div className="col">Name: test</div>
          <div className="col">Phone number: xxx-xxx-xxxx</div>
          <div className="col">twitter handle: fake-twitter-guy</div>
          <p>Email: test@test.com</p>
          <p>LinkdIN: www.linkdin.com</p>
          <p>Personal Website: mywebsite.com</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Test.gif"></img>
          <p>Github: Github.com</p>
        </div>
      </div>

      <div className="container">
        <h2>Experience</h2>
        <p>Start Date: yesterday</p>
        <p>End Date: Today</p>
        <p>Job Title: Winner</p>
        <p>Company name: That one company</p>
        <h3>Details: </h3>
      </div>

      <div className="container">
        <h2>Education</h2>
        <p>Start Date: then</p>
        <p>End Date: now</p>
        <p>Degree: Awesome</p>
        <p>University: College </p>
        <h3>Details: </h3>
      </div>

      <div className="container">
        <h2>Capstone</h2>
        <p>Name: cappy the stone</p>
        <p>URL: mycapstone.com</p>
        <h3>Details: </h3>
      </div>

      <div className="container">
        <h2>Skills</h2>
        <p>eating</p>
        <p>swallowing</p>
        <p>munching</p>
        <p>self nourishing</p>
        <p></p>
        <p>ingesting</p>
        <p>consuming</p>
        <p>intaking sustinance</p>
      </div>

      <button type="submit">Update Profile</button>
      <button type="submit">View Profile</button>
    </div>
  );
}
