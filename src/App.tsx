import useProducts from "../hooks/useProducts";
import FilterableProductTable from "../components/FilterableProductTable";

const PRODUCTS = useProducts();

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
