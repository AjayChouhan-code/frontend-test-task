import { Avatar, Typography } from "@mui/material";
import DataNotFoundImg from "../../assets/images/data-not-found.png";

const DataNotFound = () => {
  return (
    <>
      <Avatar
        src={DataNotFoundImg}
        sx={{
          width: 500,
          height: 370,
          "& img": {
            objectFit: "contain",
          },
          margin: "auto",
        }}
      />
      <Typography
        variant="subtitle1"
        sx={{ color: "#999FAA", textAlign: "start" }}
      >
        No result
      </Typography>
    </>
  );
};

export default DataNotFound;
