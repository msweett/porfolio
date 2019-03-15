import styled from "styled-components";
import React from "react";

import NavBar from "../molecules/NavBar";
import Content from "../molecules/Content";
import Header from "../molecules/Header";
import ContentWrapper from "../atoms/ContentWrapper";

class AboutMe extends React.Component {
  render() {
    const aboutMe =
      "Hi, my name is Matthew Sweett; an east coast software developer!";

    return (
      <div className="matthew-sweett-porfolio">
        <ContentWrapper>
          <Content title="About me" content={aboutMe} />
        </ContentWrapper>
        <div className="footer" />
      </div>
    );
  }
}

export default AboutMe;
