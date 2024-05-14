import "./App.css";
import { Image } from "./components/Image";
import ProductList from "./components/ProductList.js";
import Title from "./components/Title";

function App() {
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
      <ProductList />
    </div>
  );
}

export default App;
