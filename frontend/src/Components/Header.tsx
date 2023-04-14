import { AppBar, Toolbar, Button } from "@mui/material";
import React from "react";
import HiveIcon from "@mui/icons-material/Hive";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <HiveIcon sx={{ mr: 2 }} />

        <Button variant="contained" color="primary">
          <Link
            style={{ color: "white", textDecorationLine: "none" }}
            to={"/termekek"}
          >
            Termékek
          </Link>
        </Button>
        <Button variant="contained" color="primary" sx={{ ml: 3 }}>
          <Link
            style={{ color: "white", textDecorationLine: "none" }}
            to={"/kosar"}
          >
            Kosár
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
