import "./styles.css";
import Product from "../Product";

function ProductList({ products, handleClick }) {
  return (
    <div className="ProductList">
      <ul className="ProductList__ul">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleClick={handleClick}
          />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
