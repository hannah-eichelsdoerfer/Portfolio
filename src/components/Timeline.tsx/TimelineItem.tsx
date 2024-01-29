interface TimelineItemProps {
  title: string;
  date: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  date,
  description,
}) => (
  <div className="flex items-center mb-6">
    <div className="relative mr-4">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4 bg-white border-2 border-gray-400 rounded-full"></div>
      <div className="bg-gray-400 h-24 w-0.5"></div>
    </div>
    <div>
      <h3 className="font-bold mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{date}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

export default TimelineItem;
