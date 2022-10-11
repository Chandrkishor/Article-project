import { Box, Grid } from "@mui/material";
import React from "react";
import MiniView from "./Miniview/Miniview";

import data from "./data.json";

const HomePage = () => {
  const { articles } = data;
  return (
    <div
      style={{
        marginTop: "80px",
        display: "flex",
        justifyContent: "center",
        // width: "100%",
      }}
    >
      {/* <h3>Your Articles</h3> */}
      <div>
        {articles.map((item) => {
          return (
            <div style={{ marginBottom: "10px" }} key={item._id}>
              <MiniView data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
