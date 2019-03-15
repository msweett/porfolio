import React from "react";
import styled from "styled-components";

import Content from "../molecules/Content";
import {
  ColoredContentWrapper,
  BlankContentWrapper
} from "../atoms/ContentWrappers";

class Contact extends React.Component {
  skills = { HTML: 70, CSS: 60, Python: 70, JavaScript: 40 };

  SkillGraph = () => {
    const skills = { HTML: 70, CSS: 60, Python: 70, JavaScript: 40 };

    console.log("hello");

    // console.log("skills");

    const graph = () => {
      for (var key in skills) {
        console.log(key);
        return <div name={key}>Something</div>;
      }
    };

    // return graph();
    // Object.keys(skills).forEach(key => {
    //   console.log(key);
    // });
    // graph();
    return graph();
  };

  render() {
    const contact = "All of my contact information should be here!";

    return (
      <div className="main-page">
        <ColoredContentWrapper>
          <Content title="Contact" content={contact} />
        </ColoredContentWrapper>
        <BlankContentWrapper>
          {Object.keys(this.skills).map(key => (
            <p key={key}>{key}</p>
          ))}
        </BlankContentWrapper>
      </div>
    );
  }
}

export default Contact;
