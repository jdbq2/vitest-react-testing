import { ThemeProvider, createTheme } from "@mui/material";
import { FC, ReactElement } from "react";

interface Props {
  children: ReactElement | ReactElement[];
}
const AppProviders: FC<Props> = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppProviders;
