import logoBurguer from "./logoBurguer.png";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [getInputValue, setGetInputValue] = useState("");

  const showProducts = (event) => {
    const value = event.target.value;

    setGetInputValue(value);

    const filter = products.filter(
      (product) =>
        product.name.toLowerCase().includes(value.toLowerCase()) ||
        product.category.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredProducts(filter);

    if (value === "") {
      setFilteredProducts([]);
    }
  };

  const handleClick = (id) => {
    const find = products.find((product) => product.id === id);

    const alreadyInCart = currentSale.find((product) => product.id === find.id);

    if (alreadyInCart === undefined) {
      setCurrentSale([...currentSale, find]);
    }
  };

  useEffect(() => {
    const get = async () => {
      const response = await axios.get(
        "https://hamburgueria-kenzie-json-serve.herokuapp.com/products"
      );
      setProducts(response.data);
    };
    get();
  }, []);

  // para testar o valor que está chegando no currentSale
  // useEffect(() => {
  //   console.log(currentSale);
  // }, [currentSale]);

  return (
    <div className="App">
      <div className="App-header">
        <header>
          <h1>
            <img src={logoBurguer} alt="BurguerKenzie Logo"></img>
          </h1>
          <input
            className="inputHeader"
            placeholder="Pesquise por nome ou categoria"
            onChange={showProducts}
          ></input>
        </header>
        {currentSale.length > 0 ? (
          <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
        ) : (
          <div>
            <h2>Sua sacola está vazia</h2>
            <h3>Adicione itens</h3>
          </div>
        )}
        {filteredProducts.length > 0 ? (
          <>
            <h2>Resultados para&#58; {getInputValue}</h2>
            <ProductList
              products={filteredProducts}
              handleClick={handleClick}
            />
          </>
        ) : (
          <ProductList products={products} handleClick={handleClick} />
        )}
      </div>
    </div>
  );
}

export default App;
