import React from "react";
import NavBar from "../molecules/NavBar";
import Content from "../molecules/Content";
import ContentWrapper from "../atoms/ContentWrapper";

class Interests extends React.Component {
  render() {
    const interests = "I enjoy most things!";

    return (
      <div className="main-page">
        <ContentWrapper>
          <Content title="Interests" content={interests} />
        </ContentWrapper>
        <div className="footer" />
      </div>
    );
  }
}

export default Interests;
