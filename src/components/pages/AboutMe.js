import styled from "styled-components";
import React from "react";

import NavBar from "../molecules/NavBar";
import Content from "../molecules/Content";
import Header from "../molecules/Header";

class AboutMe extends React.Component {
  render() {
    const aboutMe =
      "Hi, my name is Matthew Sweett. I am 27 years old and am currently working as a QA specialist at GetChalk!";

    return (
      <div className="matthew-sweett-porfolio">
        <NavBar />
        <HeaderWrapper>
          <Heading heading="About Me" />
        </HeaderWrapper>
        <div className="main-content">
          <Content title="About me" content={aboutMe} />
        </div>
        <div className="footer" />
      </div>
    );
  }
}

export default AboutMe;

const Heading = styled(Header)`
  display: inline-block;
  top: 100px;
  margin-top: 100px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  top: 200px;
`;
