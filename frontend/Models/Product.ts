export type Product = {
    id: number,
    title: string,
    description: string,
    image: string,
    amount: number
}

export type ProductArray = {
    products: Product[]
}