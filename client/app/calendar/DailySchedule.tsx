import DailyScheduleItem from './DailyScheduleItem';

export default function DailySchedule() {
  return (
    <div className="w-full bg-white flex flex-col gap-4 p-6 max-h-[464px] overflow-y-auto relative">
      <DailyScheduleItem />
      <DailyScheduleItem />
      <DailyScheduleItem />
      <DailyScheduleItem />
    </div>
  );
}
