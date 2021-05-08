import React, { Component } from "react";
import Issue from "../issues-list/issue/Issue";
import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw'
export default class IssueDetails extends Component {

  

  render() {
    const issues = this.props.issues;
    let params = new URLSearchParams(window.location.search);
    const issue = issues[params.get("index")];
    const input = issue.body;
    return (
      <>
        <h1>issue # {issue.number}</h1>
        <Issue issue={issue} />
        <ReactMarkdown          
        children={input}
        rehypePlugins={[rehypeRaw]}
        />
          
        <a href={issue.html_url}>Go to the original issue</a>
      </>
    );
  }
}
