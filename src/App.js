import "./App.css";

function App() {
  const shopname = "coffeShop";
  const description = "This a coffe shop";

  return (
    <div>
      <h1>
        <center>{shopname}</center>
      </h1>
      <br />
      <h3>
        <center>{description}</center>
      </h3>
      <img
        width="1500vw"
        src="https://media.istockphoto.com/id/1218963825/photo/lovely-little-independent-coffee-shop.jpg?s=1024x1024&w=is&k=20&c=Ytmb-BFO-YPOJV-El-hxLFKclfsjkbWbPc_18h0BX70="
      />
    </div>
  );
}

export default App;
