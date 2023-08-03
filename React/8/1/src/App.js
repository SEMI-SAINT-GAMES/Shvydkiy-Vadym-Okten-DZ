// Створити  компоненту TestUseMemo в та викликати її в Апп
// TestUseMemo має пропсу data (довільне занчення та данні)
// Створити в середині TestUseMemo функцію, з "важкою" логікою (наприклад великий цикл). та мемомізувати її за допомоги useMemo якщо data змінюється
//
// Зробити те саме, але з використанням useCallback
//
// Створити хук useToggle, котрий буде міняти статус компоненти з true на false і навпаки.
//     Сигнатура хука function useToggle(defaultValue)
//
// створити хук useFetch, котрий спроможний робити запит на jsonplaceholder на /users, /posts, /comments в залежності від аргументу.
//     Сигнатура хука function(endpoint)
//
// створити хук function useArray(defaultValue), котрий спроможний маніпулювати станом масива певної копмоненти
// В середині хука реалізувати методи add(item), remove(id)
import logo from './logo.svg';
import './App.css';
import {TestUseMemo} from "./Components /TestUseMemo";

function App() {
  return (
    <div className="App">
      <TestUseMemo data = {1}/>
    </div>
  );
}

export default App;
