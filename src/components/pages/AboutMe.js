import React from "react";

import Content from "../molecules/Content";
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
      </div>
    );
  }
}

export default AboutMe;
