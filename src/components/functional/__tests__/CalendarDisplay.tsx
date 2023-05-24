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

  //custom class for sunday on calendar
  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month" && isSunday(date)) {
      return "sunday-tile";
    }
    if (view === "month" && isSaturday(date)) {
      return "saturday-tile";
    }
    return null;
  };

  const dateChangeHandler = (date: Date | null) => {
    setSelectDate(date);
    onChange(date);
  };

  const formatDay = (locale: any, selectDate: Date) => {
    return format(selectDate, "d");
  };

  if (isMobile) {
    return (
      <div className="mt-10 w-full">
        <Calendar
          onClickDay={dateChangeHandler}
          locale="ja-JP"
          formatDay={formatDay}
          value={selectDate}
          tileClassName={tileClassName}
          nextLabel="翌月＞"
          prevLabel="＜先月"
          next2Label={null}
          prev2Label={null}
          className={`md:text-lg text-base w-full`}
        />
      </div>
    );
  }

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
      />
    </div>
  );
};

export default CalendarDisplay;
