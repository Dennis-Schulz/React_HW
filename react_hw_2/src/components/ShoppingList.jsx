import React from "react";

const ShoppingList = (props) => {
  return (
    <div>
      {props.products.length > 0 ? (
        <ul>
          <h2>Список покупок:</h2>
          {props.products.map((product) => (
            <li>{product}</li>
          ))}
        </ul>
      ) : (
        <h2>Список покупок пуст</h2>
      )}
    </div>
  );
};

export default ShoppingList;
