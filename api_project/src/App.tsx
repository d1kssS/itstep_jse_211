import "./styles.css";
import { RouterProvider, Link } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

/*
  https://swapi.dev
  Реализовать главную страницу с кнопками: People, Starships, Planets
  При клике на каждую из кнопок нужно реализовать переход
  на страницу со списком(списокм людей, кораблей, планет).
  
  При клике на конкретный элемент переходить на новую страницу
  и подгружать данные об этой сущности(человек/корабль/планета).

  ДОП: На основе айдишников сущности можно подгрузить изображения с ресурса:
  https://starwars-visualguide.com/


  Пример:
  1. Кликаю на кнопку People - попадаю на страницу /people
  2. Кликаю по любому персонажу - попадаю на
  страницу /people/:id (где :id - айдишник этого персонажа)
  3. Ссылка на изображение для персонажа будет следующей:
  https://starwars-visualguide.com/assets/img/characters/1.jpg - где '1' - айдишник персонажа



*/
