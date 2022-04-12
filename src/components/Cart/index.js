import "./styles.css";

function Cart({ currentSale, setCurrentSale }) {
  const deleteCartProduct = (product) => {
    const selected = product.id;
    const filter = currentSale.filter((prod) => prod.id !== selected);
    setCurrentSale(filter);
  };
  return (
    <div className="cartProducts">
      <div className="cartProducts__DivTitle">
        <h2 className="cartProducts__Title">Carrinho de compras</h2>
      </div>
      {currentSale.length > 0 ? (
        <div className="cartProducts__DivMain">
          <ul className="cartProducts__Ul">
            {currentSale.map((product) => {
              return (
                <li className="cartProducts__Li" key={product.id}>
                  <div className="cartProducts__DivImgNameCategory">
                    <div className="cartProducts__DivImg">
                      <img
                        className="cartProducts__Img"
                        src={product.img}
                        alt="Imagem do Produto"
                      ></img>
                    </div>
                    <div className="cartProducts__DivNameCategory">
                      <h3 className="cartProducts__Name">
                        {product.name.length > 14
                          ? product.name.slice(0, 14) + "..."
                          : product.name}
                      </h3>
                      <h4 className="cartProducts__Category">
                        {product.category}
                      </h4>
                    </div>
                  </div>
                  <button
                    className="cartProducts__RmvProd"
                    onClick={() => deleteCartProduct(product)}
                  >
                    Remover
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="cartProducts__DivPrice">
            <h5 className="cartProducts__TotalTitle">Total</h5>
            <h5 className="cartProducts__TotalValue">
              {currentSale
                .reduce((acc, prod) => acc + prod.price, 0)
                .toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
            </h5>
            <div className="cartProducts__DivRmvAll">
              <button
                className="cartProducts__RmvAll"
                onClick={() => setCurrentSale([])}
              >
                Remover todos
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="cartProducts__DivEmptyCard">
          <h2 className="cartProducts__EmptyMsgH2">Sua sacola está vazia</h2>
          <h3 className="cartProducts__EmptyMsgH3">Adicione itens</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
