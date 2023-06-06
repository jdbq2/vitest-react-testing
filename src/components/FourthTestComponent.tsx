import { useTheme } from "@mui/material";

const FourthTestComponent = () => {
  const theme = useTheme();
  return (
    <>
      <h1>{theme.palette.mode}</h1>
    </>
  );
};

export default FourthTestComponent;
