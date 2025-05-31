import { useState } from "react";
import ValueDisplay from "./components/ValueDisplay";
import styles from './styles/App.module.css';

function App() {
  const [value, setValue] = useState(null);

  return (
    <div className="App">
      <h1>Home work 12</h1>
      <input placeholder="Введите текст" className={styles.coolInput} value={value} onChange={(e) => setValue(e.target.value)} type="text" />
      <ValueDisplay value={value}/>
    </div>
  );
}

export default App;
