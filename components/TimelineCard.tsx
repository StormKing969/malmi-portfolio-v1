import React from "react";
import { educationItems, experienceItems } from "@/data";
import TimelineContent from "./TimelineContent";

const TimelineCard = ({ id }: { id: string }) => {
  return (
    <div className="tab-content" id={id}>
      <div className="timeline">
        {id === "education" &&
          educationItems.map(
            ({
              degree,
              institution,
              startDate,
              endDate,
              description,
              index,
            }) => (
              <TimelineContent
                key={index}
                index={index}
                degree={degree}
                institution={institution}
                startDate={startDate}
                endDate={endDate}
                description={description}
              />
            )
          )}

        {id === "experience" &&
          experienceItems.map(
            ({ position, company, startDate, endDate, workSummary, index }) => (
              <TimelineContent
                key={index}
                index={index}
                position={position}
                company={company}
                startDate={startDate}
                endDate={endDate}
                workSummary={workSummary}
              />
            )
          )}
      </div>
    </div>
  );
};

export default TimelineCard;
