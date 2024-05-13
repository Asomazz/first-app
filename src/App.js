import "./App.css";
import { Image } from "./components/Image";
import ProductsCards from "./components/ProductsCards";
import Title from "./components/Title";
import products from "./data";

function App() {
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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Title />
      <Image />

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "70vh",
        }}
      >
        {productsList}
      </div>
    </div>
  );
}

export default App;
