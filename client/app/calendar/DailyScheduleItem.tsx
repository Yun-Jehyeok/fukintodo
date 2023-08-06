export default function DailyScheduleItem() {
  const content =
    '상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용';
  return (
    <div className="w-full bg-white shadow-md rounded-xl cursor-pointer p-4">
      <div className="text-xs text-bodydark2 flex justify-between mb-2">
        2023-08-06
      </div>
      <div className="font-bold mb-2">Calendar 개발</div>
      <div className="text-sm mb-1">06:00~08:00</div>
      <div>{content.length > 24 ? content.slice(0, 24) + '...' : content}</div>
    </div>
  );
}
