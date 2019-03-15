import React from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";
import ScrollableAnchor, { goToAnchor } from "react-scrollable-anchor";

class NavigationalContent extends React.Component {
  render() {
    const { content, color, stringLinks, scrollCB } = this.props;

    const createContent = () =>
      Object.keys(stringLinks).map(key => {
        console.log(key);
        if (stringLinks[key]) {
          return (
            <StyledText key={key} onClick={() => goToAnchor(key)}>
              {key}
            </StyledText>
          );
        } else {
          return (
            <p style={{ display: "inline" }} key={key}>
              {key}
            </p>
          );
        }
      });

    return (
      <PWrapper>
        <TextWrapper style={{ color: color }}>{createContent()}</TextWrapper>
      </PWrapper>
    );
  }

  static defaultProps = {
    color: "white"
  };
}

NavigationalContent.propTypes = {
  stringLinks: PropTypes.object.isRequired,
  color: PropTypes.string
};

const StyledText = Styled.p`
display: inline;
background:#022f7a;
  &:hover{
    background: #4175cc;
    cursor: pointer;
  } 
`;

const TextWrapper = Styled.div`
  font-weight: 25px;
  font-size: 25px;
  text-align: center;
  height: 80px;
`;

const PWrapper = Styled.div`
  display: flex;
  height: 150px;
  width: 550px;
  justify-content:center;
  align-items: center;
`;

export default NavigationalContent;
