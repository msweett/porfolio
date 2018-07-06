import React from "react";
import NavBar from "./NavBar";
import Content from "./Content";
import Sidebar from "./Sidebar";
import base, { firebaseApp } from "../base";
import Login from "./Login";
import firebase from "firebase";

class Blog extends React.Component {
  state = {
    content: "",
    title: [],
    uid: null,
    owner: null
  };

  componentDidMount() {
    this.ref = base.syncState("test", {
      context: this,
      state: "content"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  changeContent = changedContent => {
    var content = { ...this.state.content };
    content = changedContent;
    this.setState({ content });
  };

  authHandler = async authData => {
    const app = await base.fetch("owner", { context: this });

    if (!app.owner) {
      await base.post("owner", {
        data: authData.user.uid
      });
    }

    this.setState({
      uid: authData.user.uid,
      owner: app.owner || authData.user.uid
    });
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  render() {
    const blog =
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
    if (!this.state.uid) {
      return (
        <div className="main-page">
          <NavBar /> return <Login authenticate={this.authenticate} />
        </div>
      );
    } else if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>You don't belong here!</p>
        </div>
      );
    } else {
      return (
        <div className="main-page">
          <NavBar />
          <div className="main-content">
            <Content title="Blog" content={this.state.content} />
            <Sidebar title="Choose a date" changeContent={this.changeContent} />
          </div>
          <div className="footer" />
        </div>
      );
    }
  }
}

export default Blog;
