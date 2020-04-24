import React, { useEffect, useState } from "react";
import moment from "moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";
import DueDatePickerProps from "./DueDatePickerProps";

const DueDatePicker = ({
  inputDueDate,
  onDueDateChange,
}: DueDatePickerProps) => {
  const [dueDate, setDueDate] = useState(moment());
  const [focused, setFocused] = useState(null);

  useEffect(() => {
    if (inputDueDate) {
      setDueDate(moment(inputDueDate, "YYYY-MM-DD"));
    }
  }, [inputDueDate]);

  return (
    <SingleDatePicker
      date={dueDate} // momentPropTypes.momentObj or null
      onDateChange={onDueDateChange} // PropTypes.func.isRequired
      focused={focused} // PropTypes.bool
      onFocusChange={({ focused }: any) => setFocused(focused)} // PropTypes.func.isRequired
      id="task-due-date" // PropTypes.string.isRequired,
    />
  );
};

export default DueDatePicker;
