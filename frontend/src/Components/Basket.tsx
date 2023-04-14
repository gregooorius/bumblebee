import { ThemeProvider } from "@emotion/react";
import {
  CssBaseline,
  Box,
  Container,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { theme } from "./Products";
import { Header } from "./Header";
import { BasketCard } from "./BasketCard";
import { delAll } from "../store/basketSlice";

export function Basket() {
  const products = useSelector((state: RootState) => state.basket);
  const dispatch = useDispatch();
  console.log(products.products);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
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
              Kosár
            </Typography>
            <Box textAlign={"center"}>
              <Button
                color="primary"
                size="small"
                variant="contained"
                onClick={() => dispatch(delAll())}
              >
                Kosár Ürítése
              </Button>
            </Box>
          </Container>
        </Box>
        <Container sx={{ py: 5 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={5}>
            {products.products.map((honey) => {
              console.log(honey);
              return <BasketCard key={honey.id} honey={honey} />;
            })}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
