import * as React from "react";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const SubHeader = ({ title, actionButtons = [] }) => {
  return (
    <Box display="flex" alignItems="baseline" mx={1}>
      <Typography variant="h4" my={3} flex={1}>
        {title}
      </Typography>
      <Stack spacing={2} direction="row">
        {actionButtons.map((ab) => (
          <Button
            key={ab.title}
            variant="contained"
            startIcon={ab.startIcon}
            onClick={ab.onClick}
          >
            {ab.title}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

SubHeader.propTypes = {
  title: PropTypes.string,
  actionButtons: PropTypes.array,
};

export default SubHeader;
