import { Box } from "@mui/material";
import Heading from "./Heading";
import MainData from "./MainData";
const Employee = () => {
  return (
    <Box
      sx={{
        height: "700px",
        width: "78%",
        marginLeft: "200px",
        marginTop: "60px",
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
        gap:"30px"
      }}>
      <Heading />
      <MainData />
    </Box>
  );
};

export default Employee;
