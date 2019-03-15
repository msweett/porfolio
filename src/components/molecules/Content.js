import React from "react";
import Styled from "styled-components";

class Content extends React.Component {
  render() {
    const content = this.props.content;
    const title = this.props.title;

    return (
      <PWrapper>
        <StyledP>{content}</StyledP>
      </PWrapper>
    );
  }
}

export default Content;

const StyledP = Styled.p`
  font-weight: 25px;
  font-size: 25px;
  text-align: center;
  color: white;
`;

const PWrapper = Styled.div`
  display: flex;
  height: 150px;
  width: 500px;
  justify-content:center;
`;
