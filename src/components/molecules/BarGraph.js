import React from "react";
import Styled from "styled-components";

class BarGraph extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <GraphWrapper>
        {Object.keys(items).map(key => (
          <BarGraphSection key={key} name={key} fill={items[key]} />
        ))}
      </GraphWrapper>
    );
  }
}

const BarGraphSection = props => (
  <Section>
    <Title>{props.name}</Title>
    <Bar fill={props.fill} />
  </Section>
);

const Bar = props => {
  const fillAmount = fill => 300 * fill;

  return (
    <OuterBar>
      <InnerBar fill={fillAmount(props.fill)} />
    </OuterBar>
  );
};

const Section = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InnerBar = Styled.div`
    background-color: #759cff;
    width: ${props => props.fill}px;
    `;

const OuterBar = Styled.div`
    display: flex;
    height: 20px;
    width: 300px;
    border: 2px solid black;
    `;

const GraphWrapper = Styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  width: 500px;
  height: 250px;
  background-color: #eaf0ff;
  `;

const Title = Styled.div`
  display: flex;
  height: 20px;
  width: 100px;
  `;

export default BarGraph;
