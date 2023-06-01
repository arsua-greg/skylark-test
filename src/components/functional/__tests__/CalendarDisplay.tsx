import "react-calendar/dist/Calendar.css";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { format, isSunday, isSaturday, isSameDay } from "date-fns";

type CalendarProps = {
  children?: any;
  onChange: (date: Date | null) => void;
};

const CalendarDisplay: React.FC<CalendarProps> = ({ onChange }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectDate, setSelectDate] = useState<Date | null>(null);
  const [today, setToday] = useState(new Date());
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);
  const [isPCView, setIsPCView] = useState(false);
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth()
  );
  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  maxDate.setDate(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsPCView(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const nextButton = document.querySelector(
      ".react-calendar__navigation__arrow.react-calendar__navigation__next-button"
    ) as HTMLButtonElement;

    if (nextButton) {
      nextButton.disabled = isNextButtonDisabled;
    }
  }, [isNextButtonDisabled]);

  const holidays = [
    "2023-07-17",
    "2023-08-11",
    "2023-09-18",
    "2023-09-23",
    "2023-10-09",
    "2023-11-03",
    "2023-11-23",
    "2024-01-01",
    "2024-01-08",
    "2024-02-11",
    "2024-02-12",
    "2024-02-23",
    "2024-03-20",
    "2024-04-29",
    "2024-05-03",
    "2024-05-04",
    "2024-05-05",
    "2024-05-06",
    "2024-07-15",
    "2024-08-11",
    "2024-08-12",
    "2024-09-16",
    "2024-09-22",
    "2024-09-23",
    "2024-10-14",
    "2024-11-03",
    "2024-11-04",
    "2024-11-12",
  ];
  const holidayDates = holidays.map((holiday) => new Date(holiday));

  // Custom class for Sunday on calendar
  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month" && isSunday(date)) {
      return "sunday-tile";
    }
    if (view === "month" && isSaturday(date)) {
      return "saturday-tile";
    }
    if (holidayDates.some((holiday) => isSameDay(date, holiday))) {
      return "holiday-tile";
    }
    return null;
  };
  // End custom class

  const dateChangeHandler = (date: Date | null) => {
    setSelectDate(date);
    onChange(date);

    if (date) {
      setCurrentMonth(date.getMonth());
    }
  };

  const formatDay = (locale: any, selectDate: Date) => {
    return format(selectDate, "d");
  };

  const isDateDisabled = (date: Date): boolean => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    return date < currentDate;
  };

  const CustomDayCell = ({ date }: { date: Date }) => {
    const isDisabled = isDateDisabled(date);

    if (isDisabled) {
      return null;
    }

    const renderSymbols = () => {
      if (date.getDate() % 2 === 0) {
        return <span className="text-[#008EFF] block md:mt-2 mt-1">△</span>;
      } else {
        return <span className="text-[#008EFF] block md:mt-2 mt-1">◎</span>;
      }
    };

    return (
      <div className="day-cell">
        <div className="symbols">{renderSymbols()}</div>
      </div>
    );
  };

  const handleActiveStartDateChange = ({ action, activeStartDate }: any) => {
    if (isPCView) {
      setIsNextButtonDisabled(action === "next");
    }
    if (["next", "prev"].includes(action)) {
      setToday(new Date(activeStartDate));
    }
  };

  return (
    <div className="mt-10">
      <Calendar
        locale="ja-JP"
        nextLabel="翌月＞"
        prevLabel="＜先月"
        view="month"
        className={`md:text-lg text-base`}
        showDoubleView={!isMobile}
        onClickDay={dateChangeHandler}
        tileClassName={tileClassName}
        showFixedNumberOfWeeks={false}
        formatDay={formatDay}
        tileDisabled={({ date }) => isDateDisabled(date)}
        next2Label={null}
        prev2Label={null}
        value={selectDate}
        tileContent={CustomDayCell}
        maxDate={maxDate}
        minDate={minDate}
        activeStartDate={today}
        onActiveStartDateChange={handleActiveStartDateChange}
      />
    </div>
  );
};

export default CalendarDisplay;
