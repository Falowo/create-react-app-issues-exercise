import React, { Component } from "react";
import ApiGithub from "./conf/api.github";
import { IssuesList, Header, Loading, IssueDetails } from "./components";
import { Redirect, Route, Switch } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [],
      loaded: false,
    };
  }

  componentDidMount() {
    ApiGithub.fetchissues()
      .then((issues) => {
        this.setState({ issues, loaded: true });
      })
      .catch((err) => console.log(err));
  }

  

  render() {
    return (
      <div className="container m-5">
        <Header />
      {this.state.loaded ? (
           <Switch>
           <Route
             exact
             path="/"
             render={(props) => (
               <IssuesList
                 {...props}
                 issues={this.state.issues}
               />
             )}
           />
           <Route 
           path="/issue/:index" 
           render={(props)=>(
            <IssueDetails
            {...props} 
              issues={this.state.issues}
            /> 
           )}
            />
            <Redirect
              to="/"
            />
         </Switch>
      ): (<Loading/>)}
       
      </div>
    );
  }
}
