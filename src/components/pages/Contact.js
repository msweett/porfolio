import React from "react";
import NavBar from "../molecules/NavBar";
import Content from "../molecules/Content";

class Contact extends React.Component {
  render() {
    const contact = "All of my contact information should be here!";

    return (
      <div className="main-page">
        <NavBar />
        <div className="main-content">
          <Content title="Contact" content={contact} />
        </div>
        <div className="footer" />
      </div>
    );
  }
}

export default Contact;
