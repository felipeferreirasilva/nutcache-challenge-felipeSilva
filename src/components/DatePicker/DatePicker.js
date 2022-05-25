import PropTypes from "prop-types";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TextField from "@mui/material/TextField";

const DatePicker = ({ label, value, onChange, inputFormat = "MM/dd/yyyy" }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label={label}
        inputFormat={inputFormat}
        value={value}
        onChange={(e) => onChange(e)}
        renderInput={(params) => <TextField {...params} />}
        required
      />
    </LocalizationProvider>
  );
};

DatePicker.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  inputFormat: PropTypes.string,
};

export default DatePicker;
