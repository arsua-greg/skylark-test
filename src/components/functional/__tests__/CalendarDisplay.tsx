import "react-calendar/dist/Calendar.css";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { format, isSunday, isSaturday } from "date-fns";

type CalendarProps = {
  children?: any;
  onChange: (date: Date | null) => void;
};

const CalendarDisplay: React.FC<CalendarProps> = ({ onChange }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectDate, setSelectDate] = useState<Date | null>(new Date());
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth()
  );
  const [numMonthsToShow, setNumMonthsToShow] = useState<number>(3);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Custom class for Sunday on calendar
  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month" && isSunday(date)) {
      return "sunday-tile";
    }
    if (view === "month" && isSaturday(date)) {
      return "saturday-tile";
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

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + numMonthsToShow - 1);

  const CustomDayCell = ({ date }: { date: Date }) => {
    const isDisabled = isDateDisabled(date);
    const selectedMonth = date.getMonth();
    const nextButtonDisabled =
      currentMonth >= currentMonth + numMonthsToShow - 1;

    if (isDisabled) {
      return null;
    }

    const renderSymbols = () => {
      if (
        selectedMonth >= currentMonth &&
        selectedMonth < currentMonth + numMonthsToShow
      ) {
        if (date.getDate() % 2 === 0) {
          return <span className="text-[#008EFF] block md:mt-2 mt-1">△</span>;
        }
        if (date.getDate() % 2 !== 0) {
          return <span className="text-[#008EFF] block md:mt-2 mt-1">◎</span>;
        }
      }
      return null;
    };

    return (
      <div className="day-cell">
        <div className="symbols">{renderSymbols()}</div>
        {/* Render the Next button as disabled if necessary */}
        {nextButtonDisabled && <button disabled>Next</button>}
      </div>
    );
  };

  return (
    <div className="mt-10">
      <Calendar
        locale="ja-JP"
        nextLabel="翌月＞"
        prevLabel="＜先月"
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
      />
    </div>
  );
};

export default CalendarDisplay;
