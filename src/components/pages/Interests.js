import React from "react";
import Styled from "styled-components";
import Content from "../molecules/Content";
import {
  ColoredContentWrapper,
  BlankContentWrapper
} from "../atoms/ContentWrappers";
import NavigationalContent from "../molecules/NavigationalContent";
import ScrollableAnchor, { goToAnchor } from "react-scrollable-anchor";

class Interests extends React.Component {
  render() {
    const interests =
      "Some things I enjoy outside of work: Video Games, Photography, Cars";
    const interests2 = "Video Games, Photography, Cars";

    const stringLinks = { "Video Games": "videogames" };

    return (
      <div className="main-page">
        <ColoredContentWrapper>
          <NavigationalContent
            scrollCB={this.scrollToRef}
            content={interests}
            stringLinks={stringLinks}
          />
        </ColoredContentWrapper>
        <ScrollableAnchor id={"videogames"}>
          <BlankContentWrapper>
            <Content content={interests} color="black" />
          </BlankContentWrapper>
        </ScrollableAnchor>
        <div style={{ height: "1000px" }} />
      </div>
    );
  }
}

export default Interests;

const StyledLinkText = Styled.p`
  background: blue;
`;
