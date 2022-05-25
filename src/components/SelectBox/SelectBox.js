import PropTypes from "prop-types";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

const SelectBox = ({ id, label, value, onChange, items = [] }) => {
  return (
    <FormControl>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        id={id}
        value={value}
        label={label}
        onChange={(e) => onChange(e.target.value)}
      >
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

SelectBox.propTypes = {
  id: PropTypes.any,
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  items: PropTypes.array,
};

export default SelectBox;
