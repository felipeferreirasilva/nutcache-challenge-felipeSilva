import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const logoName = "Nutcache";

const Menu = ({ pages = [] }) => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontFamily: "sans-serif",
              fontWeight: 700,
              color: "#FFF",
              textDecoration: "none",
            }}
          >
            {logoName}
          </Typography>

          <Box sx={{ flexGrow: 1 }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                href={page.url}
                sx={{ my: 2, color: "white" }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

Menu.propTypes = {
  pages: PropTypes.array,
};

export default Menu;
