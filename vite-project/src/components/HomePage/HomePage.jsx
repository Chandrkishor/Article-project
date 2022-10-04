import { AlertTitle, Grid } from "@mui/material";
import React from "react";
import Miniview from "./Miniview/Miniview";

const HomePage = () => {
  return (
    <Grid sx={{ mt: "65px" }} container>
      <Grid>
        <AlertTitle>Home pages</AlertTitle>
      </Grid>
      <Grid>
        <Miniview />
      </Grid>
    </Grid>
  );
};

export default HomePage;
