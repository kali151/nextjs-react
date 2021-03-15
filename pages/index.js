import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";

class IndexPage extends Component {
  static getInitialProps(context) {
    console.log(context);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ appName: "next-react app" });
      }, 1000);
    });
    //then
    return promise;
  }

  render() {
    return (
      <div>
        <h1>Webpage: {this.props.appName}</h1>
        <p>
          GOTO: {" "}
          <Link href="/user">
            <a>User</a>
          </Link>
        </p>
        <button onClick={() => Router.push("/user")}>Go to User</button>
      </div>
    );
  }
}

export default IndexPage;
