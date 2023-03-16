import { useSelector } from "react-redux";
import {
  AddProductForm,
  Spinner,
  Counter,
  ProductList,
  UsersList,
  PostsList,
  Container,
  ThemeSwitcher,
  ProgressBar,
} from "./components";
import { RootState } from "./store";
import ThemeWrapper, { TTheme } from "./context/theme";
import { useEffect, useRef, useState } from "react";

const App = () => {
  const loader = useSelector<RootState, boolean>(
    (state) => state.loader.loading
  );

  const [theme, setTheme] = useState<TTheme>("light");
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef?.current) {
        const { height } = containerRef.current.getBoundingClientRect();
        const currentScroll = window.scrollY;
        const scrollHeight = height - window.innerHeight;
        const progress = Math.floor((currentScroll / scrollHeight) * 100);
        setProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [containerRef]);

  return (
    <ThemeWrapper.Provider value={{ theme, setTheme }}>
      <div className="scrollBar" ref={containerRef}>
        <Container>
          <ProgressBar progress={progress} />
          <h1>Redux</h1>
          <ThemeSwitcher />
          <AddProductForm />
          <ProductList />
          <UsersList />
          {loader && <Spinner />}
          <PostsList />
          {/* <Counter /> */}
        </Container>
      </div>
    </ThemeWrapper.Provider>
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
