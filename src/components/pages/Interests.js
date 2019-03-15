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
    const videogames = "Rocket League, Apex Legends, and Heathstone";
    const Photography = "...insert cool pictures here ;)";
    const cars = "Cars are cool!";

    const stringLinks = {
      "Some things I enjoy doing outside of work: ": false,
      "Video Games": true,
      ", ": false,
      Photography: true,
      ", and ": false,
      Cars: true
    };

    return (
      <div className="main-page">
        <ColoredContentWrapper>
          <NavigationalContent stringLinks={stringLinks} />
        </ColoredContentWrapper>
        <ScrollableAnchor id={"Video Games"}>
          <BlankContentWrapper>
            <Content content={videogames} color="black" />
          </BlankContentWrapper>
        </ScrollableAnchor>
        <ScrollableAnchor id={"Photography"}>
          <ColoredContentWrapper>
            <Content content={Photography} />
          </ColoredContentWrapper>
        </ScrollableAnchor>
        <ScrollableAnchor id={"Cars"}>
          <BlankContentWrapper>
            <Content content={cars} color="black" />
          </BlankContentWrapper>
        </ScrollableAnchor>
        <div style={{ height: "700px" }} />
      </div>
    );
  }
}

export default Interests;

const StyledLinkText = Styled.p`
  background: blue;
`;
