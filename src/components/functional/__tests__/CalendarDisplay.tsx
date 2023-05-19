import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateCalendar } from "@mui/x-date-pickers";
import { Box } from "@mui/material";
import { ja } from "date-fns/locale";

type CalendarProps = {
  children?: any;
  onChange: (date: Date | null) => void;
};

const CalendarDisplay: React.FC<CalendarProps> = ({ onChange }) => {
  const [selectDate, setSelectDate] = useState<Date | null>(null);

  function dateChangeHandler(date: Date | null) {
    setSelectDate(date);
    onChange(date);
  }

  return (
    <div className="mt-10">
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <DateCalendar
            sx={{
              border: "1px solid red",
              width: "w-1/2",
            }}
            onChange={dateChangeHandler}
            monthsPerRow={4}
          />
        </Box>
      </LocalizationProvider>
    </div>
  );
};

export default CalendarDisplay;
