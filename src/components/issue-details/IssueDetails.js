import React, { Component } from "react";
import Issue from "../issues-list/issue/Issue";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
export default class IssueDetails extends Component {
  render() {
    const issues = this.props.issues;
    // const params = new URLSearchParams(window.location.search);
    // const id = params.get("id");
    const index = this.props.match.params.index;
    const issue = issues[index];
    const input = issue.body;
    return (
      <>
       
        <Issue issue={issue} />
        <div className="border rounded p-2">
          <ReactMarkdown children={input} rehypePlugins={[rehypeRaw]} />
        </div>
        <div className="border rounded p-2">
          <a href={issue.html_url}>Go to the original issue url</a>
        </div>
      </>
    );
  }
}
