import productsData from "../data/ProductsData";

export interface Product{
    id: number;
    name: string;
    category: string;
    price: number;
    stocked: boolean;
}

const useProducts = () => {
    return productsData;
}


export default useProducts;