import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { Grid } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const MiniView = ({ data = {} }) => {
  const { title, para } = data;
  const [open, setOpen] = useState(false);

  // console.log(title, para);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEdit = () => {
    console.log("This handle edit function");
  };
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2">{para}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleOpen}>
            View full article
          </Button>
        </CardActions>
      </Card>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {para}
            </Typography>
            <Grid sx={{ display: "flex", flexDirection: "row" }}>
              <Button variant="outlined" size="small" onClick={handleClose}>
                close
              </Button>
              <Button variant="contained" size="small" onClick={handleEdit}>
                Edit
              </Button>
            </Grid>
          </Box>
        </Modal>
      </div>
    </>
  );
};
export default MiniView;
