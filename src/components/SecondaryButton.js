// react import
import React from "react";
// material core imports
import { Button, makeStyles } from "@material-ui/core";


// material makeStyles
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  primaryButton: {
    textTransform: "capitalize",
    backgroundColor: "#F2F2F2",
    color: "#000",
    outline: "3px solid #000",
    borderRadius: "0px",
    "& .MuiButton-endIcon": {
      marginLeft: "20px",
    },
    "&:hover": {
      backgroundColor: "#4D4D4D",
      color: "#fff",
    },
    "&:focus": {
      outline: "2px solid #000",
    },
  },
}));


export default function SecondaryButton(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
        className={classes.primaryButton}
        variant="contained"
        color="primary"
        endIcon={props.icon} // icon
        disabled={props.disabled} // disabled
        onClick={props.onClick} // on event click function
      >
        {/* title here */}
        {props.title}
      </Button>
    </div>
  );
}
