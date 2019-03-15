import styled from "styled-components";
import React from "react";

import NavBar from "../molecules/NavBar";
import Content from "../molecules/Content";
import Header from "../molecules/Header";
import {
  ColoredContentWrapper,
  BlankContentWrapper
} from "../atoms/ContentWrappers";

class AboutMe extends React.Component {
  render() {
    const aboutMe =
      "Hi, my name is Matthew Sweett; software developer & QA specalist!";

    return (
      <div className="matthew-sweett-porfolio">
        <ColoredContentWrapper>
          <Content title="About me" content={aboutMe} />
        </ColoredContentWrapper>
        <div className="footer" />
      </div>
    );
  }
}

export default AboutMe;
