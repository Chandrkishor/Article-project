import { AlertTitle, Box, Grid } from "@mui/material";
import React from "react";
import MiniView from "./MiniView/MiniView";
import data from "./data.json";

const HomePage = () => {
  const { articles } = data;
  return (
    <Grid sx={{ mt: "65px" }} container>
      <h3>Home pages</h3>
      <Grid>
        {articles.map((item) => {
          return (
            <Box sx={{ mb: 1 }}>
              <MiniView key={item._id} data={item} />
            </Box>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default HomePage;
