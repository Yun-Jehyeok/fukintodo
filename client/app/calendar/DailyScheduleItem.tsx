interface todoIFC {
  id: string;
  date: string;
  title: string;
  startTime: string;
  endTime: string;
  content: string;
}

export default function DailyScheduleItem(item: todoIFC) {
  const { date, title, startTime, endTime, content } = item;

  return (
    <div className="w-full bg-white shadow-md rounded-xl p-4 cursor-pointer">
      <div className="text-xs text-bodydark2 flex justify-between mb-2">{date}</div>
      <div className="font-bold mb-2">{title}</div>
      <div className="text-sm mb-1">
        {startTime}~{endTime}
      </div>
      <div>{content.length > 24 ? content.slice(0, 24) + "..." : content}</div>
    </div>
  );
}
