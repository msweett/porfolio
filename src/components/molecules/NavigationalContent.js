import React from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";
import ScrollableAnchor, { goToAnchor } from "react-scrollable-anchor";

class NavigationalContent extends React.Component {
  render() {
    const { content, color, stringLinks, scrollCB } = this.props;

    const createContent = () => {
      const words = content.split(" ");
      const stringLinksKeys = Object.keys(stringLinks);

      //   const content = words.map(word => {
      //     if (stringLinksKeys.includes(word)) {
      //       var str = () => <p>{words.split(word)[0]}</p>;
      //       var link = () => (
      //         <p onClick={() => goToAnchor(stringLinks[word])}>{word}</p>
      //       );
      //       var jsx = str + link;
      //     }
      //     console.log("This: ", jsx);
      //     return jsx;
      //   });
      //   return content;
    };
    {
      /* Object.keys(stringLinks).map(key => {
        console.log(stringLinks[key]);
      }); */
    }
    {
      /* }; */
    }

    // const stringLinksWords =

    // words.map(word => word in stringLinksWords);

    return (
      <PWrapper onClick={() => goToAnchor(stringLinks["Video Games"])}>
        {createContent()}
        <StyledP style={{ color: color }}>{content}</StyledP>
      </PWrapper>
    );
  }

  static defaultProps = {
    color: "white"
  };
}

NavigationalContent.propTypes = {
  content: PropTypes.string.isRequired,
  stringLinks: PropTypes.object.isRequired,
  color: PropTypes.string,
  scrollCB: PropTypes.func
};

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

export default NavigationalContent;
