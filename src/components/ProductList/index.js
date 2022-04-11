import "./styles.css";
import Product from "../Product";

function ProductList({ products, handleClick }) {
  return (
    <div>
      <ul>
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
