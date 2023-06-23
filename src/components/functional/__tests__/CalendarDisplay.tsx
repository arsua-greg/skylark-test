import "react-calendar/dist/Calendar.css";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { format, isSunday, isSaturday, isSameDay } from "date-fns";

type CalendarProps = {
  children?: any;
  onChange: (date: Date | null) => void;
  holidayDates?: any;
};

const CalendarDisplay: React.FC<CalendarProps> = ({
  onChange,
  holidayDates,
}) => {
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

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    const dates = holidayDates.map((holiday: Date) => new Date(holiday));

    if (view === "month" && isSunday(date)) {
      return "sunday-tile";
    }
    if (view === "month" && isSaturday(date)) {
      return "saturday-tile";
    }
    if (dates.some((holiday: Date) => isSameDay(date, holiday))) {
      return "holiday-tile";
    }
    return null;
  };

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
