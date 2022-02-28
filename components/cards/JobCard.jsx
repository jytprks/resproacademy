import React from "react";
import styled from "styled-components";


const JobCardStyles = styled.div`
cursor: pointer;
margin: 8px;
padding: 8px;
.card{
  padding: 8px;;
  background-color: var(--light-gray);
  border-radius: 8px;
  width: auto;
  .head-contain{
    margin: 8px 0;
    .job-title{
      color: var(--dark-blue);
      font-size: 4rem;
      font-weight: 600;
    }
    .job-location{
      font-size: 2rem;
      font-weight: 600;
    }
    
  }
  .job-description{
      font-size: 1.6rem;
      font-weight: 500;
      margin-bottom: 6px;
  }
  .salary{
    font-size: 1.6rem;
      font-weight: 500;
      margin-bottom: 6px;
  }
}
`

const JobCard = (props) => {
  return (
    <JobCardStyles>
        <article className="card">
          <header className="head">
            <div className="head-contain">
              <p className="job-title">{props.obj.jobTitle}</p>
              <p className="job-location">Facebook, Inc, Menlo Park, CA</p>
            </div>
          </header>
          <p className="job-description">
            We are looking for an outstanding Web Designer who is passionate
            about...
          </p>
          <p className="salary">$129,000 a year</p>
        </article>
    </JobCardStyles>
  );
};

export default JobCard;
