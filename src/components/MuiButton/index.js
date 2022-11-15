import Button from "@mui/material/Button";

const MuiButton = (props) => {
  return <Button variant={props.variant}>{props.buttonName}</Button>;
};

export default MuiButton;
