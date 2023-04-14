import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { Basket } from "../../Models/Basket";
import { del } from "../store/basketSlice";
import { addAmount } from "../store/productSlice";
import { api } from "../Networking/Interceptor";

export function BasketCard({ honey }: { honey: Basket }) {
  const dispatch = useDispatch();

  const deleteFromBasket = (id: number) => {
    dispatch(del({ id: id }));
    honey.amount && dispatch(addAmount({ amount: honey.amount, id: honey.id }));
  };

  const pusblish = async (hon: Basket) => {
    await api
      .post("/api/order", hon)
      .then((resp) => {
        console.log(resp.data);
        dispatch(del({ id: hon.id }));
      })
      .catch((e) => {
        console.error(e.data.error);
      });
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
            onClick={() => deleteFromBasket(honey.id)}
            size="small"
            variant="contained"
            color="primary"
            disabled={honey.amount === 0}
          >
            Törlés a kosárból
          </Button>
          <Button
            onClick={() => pusblish(honey)}
            size="small"
            variant="contained"
            color="primary"
            disabled={honey.amount === 0}
          >
            Vásárlás
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
