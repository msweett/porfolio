import React from "react";
import NavBar from "../molecules/NavBar";
import Content from "../molecules/Content";
import ContentWrapper from "../atoms/ContentWrapper";

class Contact extends React.Component {
  render() {
    const contact = "All of my contact information should be here!";

    return (
      <div className="main-page">
        {/* <NavBar /> */}
        <ContentWrapper>
          <Content title="Contact" content={contact} />
        </ContentWrapper>
        <div className="footer" />
      </div>
    );
  }
}

export default Contact;
