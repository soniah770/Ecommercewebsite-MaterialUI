import { HeaderContainer, Header } from "../../styles/Header";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./MenuIcon";
import { IconButton } from "@mui/material";
import { useUIContext } from "../../context/ui";

export default function HeaderMobile({ matches }) {
  const { setDrawerOpen, setShowSearchBox } = useUIContext();
  return (
    <HeaderContainer>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Header textAlign={"center"} variant="h4">
        Logo
      </Header>
      <IconButton onClick={() => setShowSearchBox(true)}>
        <SearchIcon />
      </IconButton>
      <Actions matches={matches} />
    </HeaderContainer>
  );
}
