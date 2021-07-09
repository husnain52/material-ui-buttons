// import react
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
    backgroundColor: "#5797F9",
    borderRadius: "0px",
    "& .MuiButton-endIcon": {
      marginLeft: "20px",
    },
    "&:hover": {
      backgroundColor: "#3073D5",
    },
    "&:focus": {
      outline: "3px solid #000",
    },
  },
}));

export default function PrimaryButton(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
        className={classes.primaryButton}
        variant="contained"
        color="primary"
        endIcon={props.icon}  // icon
        disabled={props.disabled} // disabled
        onClick={props.onClick} // on event click function
      >
          {/* title here */}
        {props.title} 
      </Button>
    </div>
  );
}
