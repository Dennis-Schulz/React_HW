import { useState, useEffect } from 'react'
import '../styles/ListItems.css'
import Items from './Items'
import Input from './Input'


const ListItems = () => {
  const [items, setItems] = useState([])
  const [inputValue, setInputValue] = useState('')
  console.log(items)
  const addItems = () => {
    if (inputValue.trim() === '') return
    setItems([...items, inputValue])
    setInputValue('')
  }

  useEffect(() => {
    console.log('Компонент ListItems обновлен')
  }, [])

  const removeItem = (index) => {
    const newItems = [...items]
    newItems.splice(index, 1)
    setItems(newItems)
  }

  return (
    <div className="list-container">
      <h2>Список элементов</h2>
      <Input inputValue={inputValue} setInputValue={setInputValue} addItems={addItems}/>
      <Items items={items} removeItem={removeItem}/>
    </div>
  )
}

export default ListItems
