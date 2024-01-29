import React from "react";
import TimelineItem from "./TimelineItem";
import timelineData from "../../data/timeline.json";

const Timeline = () => {
  return (
    <div className="timeline">
      {timelineData.map((item, index) => (
        <TimelineItem
          key={index}
          title={item.title}
          date={item.date}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Timeline;
