import React from "react";

const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 0 }
  ];
  
  function timeSince(date) {
    const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
    const interval = intervals.find(i => i.seconds < seconds);
    const count = Math.floor(seconds / interval.seconds);
    return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
  }


const Issue = (props) => {
   const issue = props.issue;
   
  return (
    <li 
    key={issue.id}
    className="list-group-item d-flex justify-content-start 
    align-items-start flex-wrap"
    >
        {issue.state === 'open' ? (
            <span className="badge rounded-pill mx-1 bg-light text-danger border border-danger">
                !
            </span>
        ):(null)}
      
      {issue.title}
      {issue.labels.map((label, index)=>
        
      (<span 
        className="badge rounded-pill mx-1"
        style={
            {backgroundColor: `#${label.color}`}
        }
        >
          {label.name}     
      </span>)
      )
      
      }
      
        <span className="w-100 text-secondary ms-2 small" >

            {`#${issue.number} opened  ${timeSince(issue.created_at)} by ${issue.user.login}`} 
        </span>
    </li>
  );
};

export default Issue;
