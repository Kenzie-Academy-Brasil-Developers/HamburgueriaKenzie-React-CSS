import "./styles.css";

function Cart({ currentSale, setCurrentSale }) {
  const deleteCartProduct = (product) => {
    const selected = product.id;
    const filter = currentSale.filter((prod) => prod.id !== selected);
    setCurrentSale(filter);
  };
  return (
    <div>
      <h2>Carrinho de compras</h2>
      <ul>
        {currentSale.map((product) => {
          return (
            <li key={product.id}>
              <div>
                <img src={product.img} alt="Imagem do Produto"></img>
                <div>
                  <h3>{product.name}</h3>
                  <h4>{product.category}</h4>
                </div>
              </div>
              <button onClick={() => deleteCartProduct(product)}>
                Remover
              </button>
            </li>
          );
        })}
      </ul>
      <div>
        <h5>Total</h5>
        <h5>
          {currentSale
            .reduce((acc, prod) => acc + prod.price, 0)
            .toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
        </h5>
      </div>
    </div>
  );
}

export default Cart;
