import { Avatar, Typography } from "@mui/material";
import {
  customStylesErrorAvtar,
  customStylesErrorText,
} from "../../constants/styles";
import ErrorImg from "../../assets/images/api-error.png";

const ErrorPage = () => {
  return (
    <>
      <Avatar src={ErrorImg} sx={customStylesErrorAvtar} />
      <Typography variant="subtitle1" sx={customStylesErrorText}>
        Something wrong happened but this is not your fault :
      </Typography>
    </>
  );
};

export default ErrorPage;
