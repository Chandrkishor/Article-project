import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const MiniView = ({ data = {} }) => {
  const { title, para } = data;
  console.log(title, para);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2">{para}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View full article</Button>
      </CardActions>
    </Card>
  );
};
export default MiniView;
