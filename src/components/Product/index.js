import "./styles.css";

function Product({ product, handleClick }) {
  return (
    <li>
      <div>
        <img src={product.img} alt="Imagem do produto"></img>
      </div>
      <h2>{product.name}</h2>
      <h3>{product.category}</h3>
      <h4>
        {product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </h4>
      <button onClick={() => handleClick(product.id)}>Adicionar</button>
    </li>
  );
}

export default Product;
