import products from "../data";
import ProductsCards from "./ProductsCards";

const ProductList = () => {
  const productsList = products.map((product) => {
    return (
      <ProductsCards
        name={product.name}
        price={product.price}
        image={product.image}
      />
    );
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "70vh",
      }}
    >
      {productsList}
    </div>
  );
};
export default ProductList;
