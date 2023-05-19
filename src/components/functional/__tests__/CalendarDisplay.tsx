import "react-calendar/dist/Calendar.css";

import React, { useState } from "react";
import Calendar from "react-calendar";
import { format } from "date-fns";

type CalendarProps = {
  children?: any;
  onChange: (date: Date | null) => void;
};

const CalendarDisplay: React.FC<CalendarProps> = ({ onChange }) => {
  const [selectDate, setSelectDate] = useState<Date | null>(new Date());

  const dateChangeHandler = (date: Date | null) => {
    setSelectDate(date);
    onChange(date);
  };

  const formatDay = (locale: any, selectDate: Date) => {
    return format(selectDate, "d");
  };

  return (
    <div className="mt-10">
      <Calendar
        showDoubleView
        onClickDay={dateChangeHandler}
        locale="ja-JP"
        formatDay={formatDay}
        nextLabel="翌月＞"
        prevLabel="＜先月"
        next2Label={null}
        prev2Label={null}
      />
    </div>
  );
};

export default CalendarDisplay;
