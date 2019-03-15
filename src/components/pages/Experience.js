import React from "react";
import NavBar from "../molecules/NavBar";
import Content from "../molecules/Content";
import ContentWrapper from "../atoms/ContentWrapper";

class Experience extends React.Component {
  render() {
    const experience = "I have some skills!";

    return (
      <div className="main-page">
        <NavBar />
        <ContentWrapper>
          <Content title="Experience" content={experience} />
        </ContentWrapper>
        <div className="footer" />
      </div>
    );
  }
}

export default Experience;
