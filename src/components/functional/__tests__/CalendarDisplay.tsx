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
  const currentDate = new Date();

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
  maxDate.setMonth(maxDate.getMonth() + 1);

  const CustomDayCell = ({ date, view }: { date: Date; view: string }) => {
    const isDisabled = isDateDisabled(date);

    if (isDisabled) {
      return null;
    }

    const renderSymbols = () => {
      // if (date.getDate() % 1 === 0) {
      //   return <span className="text-[#008EFF] block mt-2 font-bold">△</span>;
      // }

      if (date.getDate() % 2 === 0) {
        return <span className="text-[#008EFF] block mt-2"></span>;
      }

      return null;
    };

    return (
      <div className="day-cell">
        <div className="symbols">{renderSymbols()}</div>
      </div>
    );
  };

  return (
    <div className="mt-10">
      <Calendar
        showDoubleView={!isMobile}
        onClickDay={dateChangeHandler}
        locale="ja-JP"
        showFixedNumberOfWeeks={false}
        formatDay={formatDay}
        value={selectDate}
        tileClassName={tileClassName}
        nextLabel="翌月＞"
        prevLabel="＜先月"
        next2Label={null}
        prev2Label={null}
        className={`md:text-lg text-base`}
        tileDisabled={({ date }) => isDateDisabled(date)}
        tileContent={CustomDayCell}
        maxDate={maxDate}
        minDate={minDate}
      />
    </div>
  );
};

export default CalendarDisplay;
