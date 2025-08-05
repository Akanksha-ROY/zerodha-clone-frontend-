import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5   mb-5 border-top">
        <h1 className=" text-center  mt-5 ">People.</h1>
      </div>

      <div
        className="row p-5 mt-5  text-muted fs-6"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 ">
          <img
            src="media/nithinkamnath.jpg"
            style={{ borderRadius:"100%", width: "30" }}
          />
          <h4 className="mt-5">Akanksha kumari</h4>
          <h6>founder .CEO</h6>
        </div>
        <div className="col-6 p-5">
          <p>I am currently working on a clone as one of my projects in website
            development. This project is helping me understand the structure,
            design elements, and functionality of real-world websites. By
            recreating the features and layout, I'm improving my skills in HTML,
            CSS, and JavaScript, and learning how to build responsive and
            user-friendly interfaces. It’s a hands-on way to strengthen my
            front-end development knowledge and problem-solving approach.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
