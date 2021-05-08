import React from "react";
import Issue from "../issues-list/issue/Issue";



const IssueDetails = (props) => {
  const issues = props.issues;
  let params = new URLSearchParams(window.location.search);
  const issue = issues[params.get("index")];
  console.log(issue);

  

  return (
    <>
      <h1>issue # {issue.number}</h1>
      <Issue issue={issue} />
      <a href={issue.html_url}>Go to the original issue</a>
      <div>{issue.body} </div>
    </>
  );
};

export default IssueDetails;
