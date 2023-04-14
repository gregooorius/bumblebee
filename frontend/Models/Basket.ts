export type Basket = {
  id: number;
  title: string;
  description: string;
  image: string;
  amount: number;
};

export type BasketArray = {
  products: Basket[];
};
