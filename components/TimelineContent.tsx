import React from "react";

const TimelineContent = ({
  index,
  degree,
  institution,
  company,
  position,
  startDate,
  endDate,
  description,
  workSummary,
}: {
  index: string;
  degree?: string;
  institution?: string;
  company?: string;
  position?: string;
  startDate: string;
  endDate: string;
  description?: string;
  workSummary?: string[];
}) => {
  return (
    <div className="timeline-item" id={index}>
      <span className="date">
        {startDate} {endDate !== "" ? " - " + endDate : ""}
      </span>
      <h3>
        {degree !== null && degree} {position !== null && position}
      </h3>
      <h4 className="location">
        {institution} {company}
      </h4>
      <p>{description}</p>
      <ul>
        {workSummary &&
          workSummary.map((summary, i) => <li key={i}>{summary}</li>)}
      </ul>
    </div>
  );
};

export default TimelineContent;
