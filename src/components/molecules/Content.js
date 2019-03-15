import React from "react";
import Styled from "styled-components";

/*
Accepts:
  Content: whole string
  Link: link to where the string link will go 
*/
class Content extends React.Component {
  render() {
    const { content, color } = this.props;

    return (
      <PWrapper>
        <StyledP style={{ color: color }}>{content}</StyledP>
      </PWrapper>
    );
  }

  static defaultProps = {
    color: "white"
  };
}

// Content.defaultProps = {
//   color: "white"
// };

export default Content;

const StyledP = Styled.p`
  font-weight: 25px;
  font-size: 25px;
  text-align: center;
`;

const PWrapper = Styled.div`
  display: flex;
  height: 150px;
  width: 500px;
  justify-content:center;
`;
