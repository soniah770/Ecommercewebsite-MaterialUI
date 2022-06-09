import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {Header, HeaderContainer, MyList } from "../../styles/Header";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "./MenuIcon";
import { useUIContext } from "../../context/ui";

export default function HeaderDesktop({ matches }) {

    const { setShowSearchBox } = useUIContext();

    return ( 
        
<HeaderContainer>
        <Header variant = "h4" > Logo </Header>
        <MyList type = "row" /> 
        <ListItemText primary = "Home" / >
        <ListItemText primary = "Categories" / >
        <ListItemText primary = "Products" / >
        <ListItemText primary = "About us" / >
        <ListItemText primary = "Contact us" / >
        <ListItemButton onClick = {
            () => setShowSearchBox(true)
        } >
            </ListItemButton>
        <ListItemIcon>
        <SearchIcon/>
        
        </ListItemIcon>  <MenuIcon matches = { matches }/ >

        </HeaderContainer>

    );
}