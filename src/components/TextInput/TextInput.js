import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

const TextInput = ({ label, value, type = "text", onChange }) => {
  return (
    <TextField
      id="textfield"
      label={label}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required
    />
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  type: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextInput;
