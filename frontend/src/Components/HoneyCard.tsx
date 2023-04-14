import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
} from "@mui/material";
import { Product } from "../../Models/Product";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/basketSlice";
import { reduceAmount } from "../store/productSlice";

export function HoneyCard({ honey }: { honey: Product }) {
  const [amount, setAmount] = useState<number>(0);
  const dispatch = useDispatch();

  const addToBasket = (item: Product) => {
    if (amount > 0) {
      dispatch(
        add({
          product: {
            id: item.id,
            title: item.title,
            amount: amount,
            description: item.description,
            image: item.image,
          },
        })
      );
      dispatch(reduceAmount({ amount: amount, id: item.id }));
    }
  };

  return (
    <Grid item key={honey.id} xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia component="img" image={honey.image} alt="honey" />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {honey.title}
          </Typography>
          <Typography>{honey.description}</Typography>
          <Typography
            align="center"
            bgcolor={"#0971f1"}
            borderRadius={5}
            sx={{ width: "30%", mt: 2 }}
            color={"white"}
          >
            Darab: {honey.amount}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => addToBasket(honey)}
            size="small"
            variant="contained"
            color="primary"
            disabled={honey.amount === 0}
          >
            Kosárhoz adás
          </Button>
          <TextField
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setAmount(Number(event.target.value));
            }}
            sx={{ width: "30%", ml: 3 }}
            size="small"
            value={amount}
            type="number"
            label="Darab"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </CardActions>
      </Card>
    </Grid>
  );
}
