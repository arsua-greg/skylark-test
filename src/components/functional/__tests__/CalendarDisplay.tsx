import "react-calendar/dist/Calendar.css";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { format, isSunday, isSaturday, isSameDay } from "date-fns";
import { useRecoilState, useRecoilValue } from "recoil";
import { bookingDateAtom } from "@/globalState/globalState";

interface CalendarProps {
  children?: any;
  holidayDates?: any;
  offDayList?: any;
  bookedTableSlot: {
    dataList: {
      bookingDate: string;
      blockTimeList: {
        blockTime: string;
        tableSlot: number;
        externameTableSlot: number;
      }[];
    }[];
  };
  defaultBookingSlot: number;
}

const CalendarDisplay: React.FC<CalendarProps> = ({
  holidayDates,
  offDayList,
  bookedTableSlot,
  defaultBookingSlot,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [bookingDate, setBookingDate] = useRecoilState(bookingDateAtom);
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

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

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

  const CustomDayCell = ({ date }: { date: Date }) => {
    const { dataList } = bookedTableSlot;
    const isDisabled = isDateDisabled(date);
    const formattedDate = formatDate(date);
    const bookingDateItem = dataList.find(
      (item) => item.bookingDate === formattedDate
    );

    if (isDisabled) {
      return (
        <span className="text-[#949494] block md:mt-2 mt-1">
          {bookingDateItem ? "x" : ""}
        </span>
      );
    }

    if (bookingDateItem) {
      const { blockTimeList } = bookingDateItem;
      const totalBookedTableSlots = blockTimeList.reduce(
        (total, blockTime) => total + blockTime.tableSlot,
        0
      );
      const blocklistdiff = defaultBookingSlot - totalBookedTableSlots;

      switch (true) {
        case blocklistdiff >= 4:
          return <span className="text-[#008EFF] block md:mt-2 mt-1">◎</span>;
        case blocklistdiff >= 1 && blocklistdiff < 4:
          return <span className="text-[#008EFF] block md:mt-2 mt-1">△</span>;
        case blocklistdiff <= 0:
          return <span className="text-[#949494] block md:mt-2 mt-1">x</span>;
        default:
          return null;
      }
    }
    return <span className="text-[#008EFF] block md:mt-2 mt-1">◎</span>;
  };

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    const formattedOffDays = offDayList?.map(
      (offDay: Date) => new Date(offDay)
    );
    const formattedHolidayDates = holidayDates?.map(
      (holiday: Date) => new Date(holiday)
    );
    const { dataList } = bookedTableSlot;
    const formattedDate = formatDate(date);
    const bookingDateItem = dataList.find(
      (item) => item.bookingDate === formattedDate
    );

    if (view === "month") {
      if (isSunday(date)) {
        return "sunday-tile";
      }
      if (isSaturday(date)) {
        return "saturday-tile";
      }
      if (
        formattedHolidayDates?.some((holiday: Date) => isSameDay(date, holiday))
      ) {
        return "holiday-tile";
      }
      if (formattedOffDays?.some((offDay: Date) => isSameDay(date, offDay))) {
        return "offday-tile";
      }
    }

    if (bookingDateItem) {
      const { blockTimeList } = bookingDateItem;
      const totalBookedTableSlots = blockTimeList.reduce(
        (total, blockTime) => total + blockTime.tableSlot,
        0
      );
      const blocklistdiff = defaultBookingSlot - totalBookedTableSlots;

      switch (true) {
        case blocklistdiff >= 4:
          return "";
        case blocklistdiff >= 1 && blocklistdiff < 4:
          return "";
        case blocklistdiff <= 0:
          return "pointer-events-none";
        default:
          return null;
      }
    }
    return null;
  };

  const dateChangeHandler = (date: Date | null) => {
    setBookingDate(date);

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
        value={bookingDate}
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
