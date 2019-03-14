import React from "react";
import NavBar from "../molecules/NavBar";
import Content from "../molecules/Content";

class Interests extends React.Component {
  render() {
    const interests = "I enjoy most things!";

    return (
      <div className="main-page">
        <NavBar />
        <div className="main-content">
          <Content title="Interests" content={interests} />
        </div>
        <div className="footer" />
      </div>
    );
  }
}

export default Interests;
