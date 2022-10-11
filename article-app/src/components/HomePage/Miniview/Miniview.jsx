import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect } from "react";
import { useRef } from "react";

const MiniView = ({ data = {} }) => {
  const { title, para, _id } = data;
  const [open, setOpen] = useState(false);

  // console.log(title, para);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const handleEdit = (data) => {
    console.log(data, "This handle edit function");
    handleClose();
  };
  return (
    <>
      <Card sx={{ minWidth: 350, maxWidth: "600px" }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 16, fontWeight: 600, textTransform: "capitalize" }}
            color="text.secondary"
            gutterBottom
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              width: "100%",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {para}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleOpen}>
            View full article
          </Button>
        </CardActions>
      </Card>

      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle
            id="scroll-dialog-title"
            sx={{ textTransform: "capitalize" }}
          >
            {title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
              sx={{ textAlign: "justify" }}
            >
              {para}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              variant={"outlined"}
              className="button"
            >
              Close
            </Button>
            <Button
              onClick={() => handleEdit(data)}
              variant={"contained"}
              className="button"
            >
              Edit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};
export default MiniView;
