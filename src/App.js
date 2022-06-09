import "./App.css";
import { Container, Typography, Box, Stack, Divider } from "@mui/material";
import Header from "./components/Header";
import { ThemeProvider } from "@mui/system";
import theme, { Colors } from "./styles/theme";
import Products from "./components/products";
import { UIProvider } from "./context/ui";
import Footer from "./components/footer";
import AppDrawer from "./components/drawer";
import SearchBox from "./components/search";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Visma online shop- Home";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          background:Colors.white,
        }}
      >
        <Stack>
          <UIProvider>
            <Header />
            <SearchBox />
            <Box display="flex" justifyContent="center" sx={{ p: 6 }}>
             <Divider/>
              <Typography variant="h4">Our Products</Typography>
            </Box>
            <Products />
            <Footer />
            <AppDrawer />
          </UIProvider>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default App;
