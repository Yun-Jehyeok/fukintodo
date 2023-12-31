"use client";

import Breadcrumb from "@/components/BreadCrumb";
import { Key, useEffect, useState } from "react";
import DailySchedule from "./DailySchedule";

const todoList = [
  {
    date: "2023-08-06",
    data: [
      {
        id: "1",
        date: "2023-08-06",
        startTime: "06:00",
        endTime: "08:00",
        title: "Calendar 개발",
        content: "상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용",
      },
      {
        id: "2",
        date: "2023-08-06",
        startTime: "08:00",
        endTime: "10:00",
        title: "팀장 면담",
        content: "상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용",
      },
      {
        id: "3",
        date: "2023-08-06",
        startTime: "12:00",
        endTime: "14:00",
        title: "퇴근하고싶다",
        content: "상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용",
      },
      {
        id: "4",
        date: "2023-08-06",
        startTime: "14:30",
        endTime: "18:00",
        title: "집에가고싶다",
        content: "상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용",
      },
    ],
  },
  {
    date: "2023-08-14",
    data: [
      {
        id: "1",
        date: "2023-08-14",
        startTime: "06:00",
        endTime: "08:00",
        title: "Calendar 개발1",
        content: "상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용",
      },
      {
        id: "2",
        date: "2023-08-14",
        startTime: "08:00",
        endTime: "10:00",
        title: "팀장 면담1",
        content: "상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용",
      },
      {
        id: "3",
        date: "2023-08-14",
        startTime: "12:00",
        endTime: "14:00",
        title: "퇴근하고싶다1",
        content: "상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용",
      },
      {
        id: "4",
        date: "2023-08-14",
        startTime: "14:30",
        endTime: "18:00",
        title: "집에가고싶다1",
        content: "상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용",
      },
    ],
  },
  {
    date: "2023-08-26",
    data: [
      {
        id: "1",
        date: "2023-08-26",
        startTime: "06:00",
        endTime: "08:00",
        title: "Calendar 개발2",
        content: "상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용",
      },
      {
        id: "2",
        date: "2023-08-26",
        startTime: "08:00",
        endTime: "10:00",
        title: "팀장 면담2",
        content: "상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용",
      },
      {
        id: "3",
        date: "2023-08-26",
        startTime: "12:00",
        endTime: "14:00",
        title: "퇴근하고싶다2",
        content: "상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용",
      },
      {
        id: "4",
        date: "2023-08-26",
        startTime: "14:30",
        endTime: "18:00",
        title: "집에가고싶다2",
        content: "상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용",
      },
    ],
  },
];
const days = [
  { id: 0, day: "Sunday", shortDay: "Sun" },
  { id: 1, day: "Monday", shortDay: "Mon" },
  { id: 2, day: "Tuesday", shortDay: "Tue" },
  { id: 3, day: "Wednesday", shortDay: "Wed" },
  { id: 4, day: "Thursday", shortDay: "Thur" },
  { id: 5, day: "Friday", shortDay: "Fri" },
  { id: 6, day: "Saturday", shortDay: "Sat" },
];

interface todoIFC {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  title: string;
  content: string;
}

interface calendarIFC {
  id: Key;
  year: string;
  month: string;
  date: string;
  day: string;
  isActive: boolean;
  fullDate: string;
  todos: todoIFC[];
}

export default function Calendar() {
  const [calendar, setCalendar] = useState<calendarIFC[]>([{ id: "0", year: "0", month: "0", fullDate: "0", date: "0", day: "0", isActive: false, todos: [] }]);
  const [currentYear, setCurrentYear] = useState("");
  const [currentMonth, setCurrentMonth] = useState("");
  const [plans, setPlans] = useState<todoIFC[]>([]);

  const resetCalendar = (flag: Date) => {
    let year = String(flag.getFullYear());
    let month = flag.getMonth() + 1 <= 9 ? `0${flag.getMonth() + 1}` : String(flag.getMonth() + 1);
    setCurrentYear(year);
    setCurrentMonth(month);

    let calendarData = [];

    let firstDay = new Date(flag.getFullYear(), flag.getMonth(), 1);
    let lastDay = new Date(flag.getFullYear(), flag.getMonth() + 1, 0);

    let prevGap = firstDay.getDay();
    let prevMonthLastDate = new Date(flag.getFullYear(), flag.getMonth(), 0).getDate();

    let nextGap = 6 - lastDay.getDay();

    for (let i = prevMonthLastDate - prevGap + 1; i <= prevMonthLastDate; i++) {
      let newDate = new Date(flag.getFullYear(), flag.getMonth() - 1, i);
      let year = newDate.getFullYear();
      let month = newDate.getMonth() + 1;
      let date = newDate.getDate();
      let day = newDate.getDay();

      calendarData.push({ id: String(0 - i), year: String(year), month: String(month), date: String(date), day: String(day), isActive: false });
    }

    for (let i = 1; i <= lastDay.getDate() - firstDay.getDate() + 1; i++) {
      let newDate = new Date(flag.getFullYear(), flag.getMonth(), i);
      let year = newDate.getFullYear();
      let month = newDate.getMonth() + 1;
      let date = newDate.getDate();
      let day = newDate.getDay();

      calendarData.push({ id: String(i), year: String(year), month: String(month), date: String(date), day: String(day), isActive: true });
    }

    for (let i = 1; i <= nextGap; i++) {
      let newDate = new Date(flag.getFullYear(), flag.getMonth() + 1, i);
      let year = newDate.getFullYear();
      let month = newDate.getMonth() + 1;
      let date = newDate.getDate();
      let day = newDate.getDay();

      calendarData.push({ id: String(lastDay.getDate() + i), year: String(year), month: String(month), date: String(date), day: String(day), isActive: false });
    }

    calendarData = calendarData.map((v) => {
      let m = Number(v.month) <= 9 ? `0${v.month}` : v.month;
      let d = Number(v.date) <= 9 ? `0${v.date}` : v.date;
      let fullDate = `${v.year}-${m}-${d}`;

      let todos = todoList.filter((v) => v.date === fullDate);
      return { ...v, fullDate, todos: todos.length > 0 ? todos[0].data : [] };
    });

    setCalendar(calendarData);
  };

  useEffect(() => {
    let flag = new Date();

    resetCalendar(flag);
  }, []);

  const handleDecreaseMonth = () => {
    let month = Number(currentMonth);
    let year = Number(currentYear);

    if (month === 1) {
      year -= 1;
      month = 12;
    } else month -= 1;

    let flag = new Date(Number(year), Number(month - 1), 15);

    resetCalendar(flag);
  };

  const handleIncreaseMonth = () => {
    let month = Number(currentMonth);
    let year = Number(currentYear);
    if (month === 12) {
      year += 1;
      month = 1;
    } else month += 1;

    let flag = new Date(Number(year), Number(month - 1), 15);
    resetCalendar(flag);
  };

  const handleTodoData = (e: React.MouseEvent<HTMLDivElement>) => {
    let isActive = e.currentTarget.dataset.active;
    let id = e.currentTarget.dataset.id;

    if (isActive === "true") {
      let target = e.currentTarget.dataset.date;

      let plan = todoList.filter((v) => v.date === target);
      if (plan.length > 0) setPlans(plan[0].data);
      else setPlans([]);
    } else {
      if (Number(id) < 0) handleDecreaseMonth();
      else handleIncreaseMonth();
    }
  };

  return (
    <div>
      <Breadcrumb pageName="Calendar" />

      <div className="w-full mb-6 text-title-xl font-bold flex gap-4 items-center justify-center">
        <div className="bg-center bg-no-repeat w-10 h-10 cursor-pointer bg-larr" onClick={handleDecreaseMonth}></div>
        <div>
          {currentYear}. {currentMonth}.
        </div>
        <div className="bg-center bg-no-repeat w-10 h-10 cursor-pointer bg-rarr" onClick={handleIncreaseMonth}></div>
      </div>
      <div className="w-full flex gap-4">
        <div className="w-[70%] h-fit max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="w-full">
            <div className="w-full grid grid-cols-7 rounded-t-sm bg-primary text-white">
              {days.map((v) => {
                return (
                  <div
                    key={v.id}
                    className={`flex h-15 items-center justify-center ${
                      v.shortDay === "Sun" ? "rounded-tl-sm" : v.shortDay === "Sat" ? "rounded-tr-sm" : ""
                    } p-1 text-xs font-semibold sm:text-base xl:p-5`}
                  >
                    <span className="hidden lg:block">{v.day}</span>
                    <span className="block lg:hidden">{v.shortDay}</span>
                  </div>
                );
              })}
            </div>
            <div className="w-full">
              <div className="w-full grid grid-cols-7">
                {calendar.map((v) => {
                  return (
                    <div
                      key={v.id}
                      data-id={v.id}
                      data-active={v.isActive}
                      data-date={v.fullDate}
                      onClick={handleTodoData}
                      className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4"
                    >
                      <span className={`font-medium ${v.isActive ? "text-black" : "text-bodydark"}`}>{v.date}</span>
                      {v.todos.length > 0 ? (
                        <div>
                          <div className="flex gap-1 items-center">
                            <div className="w-2 h-2 rounded-full bg-[#019C63]"></div>
                            <div className="text-xs flex-1 overflow-hidden text-ellipsis whitespace-nowrap">{v.todos[0].title}</div>
                          </div>
                          {v.todos.length > 1 ? (
                            <div className="flex gap-1 items-center">
                              <div className="w-2 h-2 rounded-full bg-[#464E64]"></div>
                              <div className="text-xs flex-1 overflow-hidden text-ellipsis whitespace-nowrap">{v.todos[1].title}</div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <DailySchedule todos={plans} />
        </div>
      </div>
    </div>
  );
}
