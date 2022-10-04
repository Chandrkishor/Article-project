import { AlertTitle, Grid } from "@mui/material";
import React from "react";
import Miniview from "./Miniview/Miniview";

const HomePage = () => {
  return (
    <Grid sx={{ mt: "65px" }} container>
      <p>
        <AlertTitle>Home pages</AlertTitle>
        <Miniview />
      </p>
    </Grid>
  );
};

export default HomePage;
