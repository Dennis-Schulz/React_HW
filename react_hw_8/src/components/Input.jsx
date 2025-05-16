import React from 'react'

const Input = ({inputValue, setInputValue, addItems}) => {
  return (
    <div className="input-group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите текст"
        />
        <button onClick={() => addItems()}>Добавить</button>
      </div>
  )
}

export default Input