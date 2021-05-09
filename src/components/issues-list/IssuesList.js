import React from "react";
import Issue from "./issue/Issue";
import { NavLink } from "react-router-dom";

const IssuesList = (props) => {
  const issues = props.issues;

  return (
    <>
      {issues && issues.length ? (
        <ul className="list-group">
          {issues.map((issue, i) => (
            <NavLink
              key={issue.id}
              to={{ pathname: `/issue/${i}/`, search: `?id=${issue.id}` }}
              issue={issue}
              className="text-decoration-none"
            >           
              <Issue key={issue.id} index={i} issue={issue} />
            </NavLink>
          ))}
        </ul>
      ) : (
        <h1 className="text-center"> No issues yet... </h1>
      )}
    </>
  );
};

export default IssuesList;
