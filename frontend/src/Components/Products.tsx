import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { HoneyCard } from "./HoneyCard";
import { Header } from "./Header";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0971f1",
    },
  },
});

export function Products() {
  const products = useSelector((state: RootState) => state.product);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header/>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Házikészítésű Mézek
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 5 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={5}>
            {products.products.map((honey) => (
              <HoneyCard key={honey.id} honey={honey}/>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
