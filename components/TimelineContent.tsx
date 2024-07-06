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
}: {
  index: string;
  degree?: string;
  institution?: string;
  company?: string;
  position?: string;
  startDate: string;
  endDate: string;
  description?: string;
}) => {
  return (
    <div className="timeline-item" id={index}>
      <span className="date">
        {startDate} - {endDate}
      </span>
      <h4>
        {degree !== null && degree} {position !== null && position} -{" "}
        <span>
          {institution !== null && institution} {company !== null && company}
        </span>
      </h4>
      <p>{description}</p>
    </div>
  );
};

export default TimelineContent;
