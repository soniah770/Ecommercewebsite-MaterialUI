import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export default function Appbar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      {matches ? <HeaderMobile matches={matches}/> : <HeaderDesktop matches={matches}/>}
    </>
  );
}
