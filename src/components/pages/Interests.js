import React from "react";
import NavBar from "../molecules/NavBar";
import Content from "../molecules/Content";
import {
  ColoredContentWrapper,
  BlankContentWrapper
} from "../atoms/ContentWrappers";

class Interests extends React.Component {
  render() {
    const interests = "I enjoy most things!";

    return (
      <div className="main-page">
        <ColoredContentWrapper>
          <Content title="Interests" content={interests} />
        </ColoredContentWrapper>
        <div className="footer" />
      </div>
    );
  }
}

export default Interests;
