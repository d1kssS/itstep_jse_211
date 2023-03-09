import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { IProduct } from "../../types";

const ProductList = () => {
  const products = useSelector<RootState, IProduct[]>(
    (state) => state.products.list
  );
  return (
    <div>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            {item.name}-{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
