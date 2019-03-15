import React from "react";
import Content from "../molecules/Content";
import {
  ColoredContentWrapper,
  BlankContentWrapper
} from "../atoms/ContentWrappers";
import BarGraph from "../molecules/BarGraph";

class Experience extends React.Component {
  skills = { HTML: 0.7, CSS: 0.5, Python: 0.8, JavaScript: 0.3 };

  render() {
    const experience = "I have some skills!";

    return (
      <div className="main-page">
        <ColoredContentWrapper>
          <Content title="Experience" content={experience} />
        </ColoredContentWrapper>
        <BlankContentWrapper>
          <BarGraph items={this.skills} />
        </BlankContentWrapper>
      </div>
    );
  }
}

export default Experience;
