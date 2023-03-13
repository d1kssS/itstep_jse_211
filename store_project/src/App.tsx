import { useSelector } from "react-redux";
import {
  AddProductForm,
  Spinner,
  Counter,
  ProductList,
  UsersList,
} from "./components";
import { RootState } from "./store";

const App = () => {
  const loader = useSelector<RootState, boolean>(
    (state) => state.loader.loading
  );

  return (
    <div>
      <h1>Redux</h1>
      <AddProductForm />
      <ProductList />
      <UsersList />
      {loader && <Spinner />}
      {/* <Counter /> */}
    </div>
  );
};

export default App;

// const initialState = {
//   counter: 0,
// };

// 1. Нет побочных эффектов
// 2. Функция должна зависеть от переданных аргументов

// @ts-ignore
// const reducer = (state = initialState, action) => {
//   switch (action?.type) {
//     case "INC":
//       return { ...state, counter: state.counter + 1 };
//     case "DEC":
//       return { ...state, counter: state.counter - 1 };
//     case "RND":
//       return { ...state, counter: state.counter + action.payload };
//     default:
//       return state;
//   }
// };
// // @ts-ignore
// let store = reducer(initialState);
// console.log({ store });

// const increment = { type: "INC" };

// store = reducer(store, increment);
// store = reducer(store, increment);
// store = reducer(store, increment);

// store = reducer(store, { type: "DEC" });
// const rnd = Math.random() * 10;
// store = reducer(store, { type: "RND", payload: rnd });

// console.log({ store });

/* <div id="list_container"></div>; */

// 1. Получить контейнер
// const list = [1, 2, 4, 5];

// const variable = document.querySelector("#list_container");
// const template =(item)=>{return `<p>${item}</p>`};

// function renderList(list, container, templateFn) {
//   list.forEach((item) => {
//     container?.innerHTML += templateFn(item);
//   });
// }
