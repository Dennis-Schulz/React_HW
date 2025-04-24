import React from "react";

const ShoppingList = ({products}) => {
  return (
    <div>
      {products.length > 0 ? (
        <ul>
          <h2>Список покупок:</h2>
          {products.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
      ) : (
        <h2>Список покупок пуст</h2>
      )}
    </div>
  );
};

export default ShoppingList;
