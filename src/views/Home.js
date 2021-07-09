// react import
import React from "react";
// button comp imports
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
// material core imports
import { Paper, makeStyles, Typography } from "@material-ui/core";
// material icons
import { Delete, Save } from "@material-ui/icons";

// makestyles
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  paper: {
    padding: "40px",
    width: "300px",
  },
}));

export default function Home() {
  const classes = useStyles();
  // handleClick func
  const handleClick = () => {
    window.alert("Button is Clicked");
  };
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography>Primary Button:</Typography>
        {/* primary button */}
        <PrimaryButton
          title="Save as..."
          icon={<Save />}
          disabled={false}
          onClick={() => handleClick()}
        />
        <Typography>Secondary Button:</Typography>
        {/* secondary button */}
        <SecondaryButton
          title="Save as..."
          icon={<Save />}
          disabled={false}
          onClick={() => handleClick()}
        />
        <Typography>Disabled Button:</Typography>
        {/* disabled button */}
        <PrimaryButton
          title="Save as..."
          icon={<Save />}
          disabled={true}
          onClick={() => handleClick()}
        />
        <Typography>Delete Button:</Typography>
        {/* delete button */}
        <PrimaryButton
          title="Delete"
          icon={<Delete />}
          disabled={false}
          onClick={() => handleClick()}
        />
      </Paper>
    </div>
  );
}
