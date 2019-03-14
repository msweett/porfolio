import React from "react";
import NavBar from "../molecules/NavBar";
import Content from "../molecules/Content";

class Experience extends React.Component {
  render() {
    const experience = "I have some skills!";

    return (
      <div className="main-page">
        <NavBar />
        <div className="main-content">
          <Content title="Experience" content={experience} />
        </div>
        <div className="footer" />
      </div>
    );
  }
}

export default Experience;
