import React from "react";
import styles from "../styles/List.module.css";
import { useState } from "react";

const List = () => {
  const [people, setPeople] = useState([
    { id: 1, name: "Иван", age: 20 },
    { id: 2, name: "Мария", age: 22 },
    { id: 3, name: "Алексей", age: 21 },
    { id: 4, name: "Марина", age: 19 },
    { id: 5, name: "Даша", age: 23 },
    { id: 6, name: "Глеб", age: 24 },
    { id: 7, name: "Дима", age: 18 },
    { id: 8, name: "Гриша", age: 20 },
    { id: 9, name: "Серафим", age: 21 },
  ]);

  return (
  <div>
<ul style={{ listStyle: "none" }}>
  {people.map((person) => (
    <li className={styles.person} key={person.id}>
      {person.name} - {person.age} лет
      <button className={styles.button} onClick={() => setPeople(people.filter((p) => p.id !== person.id))}>Удалить</button>
    </li>
  ))}
</ul>
  </div>
  );
};

export default List;
