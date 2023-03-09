import { useDispatch } from "react-redux";
import { createProductAction } from "../../actions/productsActions";
import { FormEvent, useState } from "react";
const AddProductForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    dispatch(createProductAction({ name, price: parseInt(price) }));
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddProductForm;
