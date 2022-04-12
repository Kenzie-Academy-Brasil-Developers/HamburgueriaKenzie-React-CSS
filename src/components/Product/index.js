import "./styles.css";

function Product({ product, handleClick }) {
  return (
    <li className="liProduct">
      <div className="liProduct__DivImg">
        <img
          className="liProduct__Img"
          src={product.img}
          alt="Imagem do produto"
        ></img>
      </div>
      <h2 className="liProduct__ProductName">{product.name}</h2>
      <h3 className="liProduct__ProductCategory">{product.category}</h3>
      <h4 className="liProduct__ProductPrice">
        {product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </h4>
      <button
        className="liProduct__Button"
        onClick={() => handleClick(product.id)}
      >
        Adicionar
      </button>
    </li>
  );
}

export default Product;
