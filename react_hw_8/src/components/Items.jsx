import { AnimatePresence, motion } from 'framer-motion'

const Items = ({ items, removeItem }) => {
  return (
    <div>
      <ul className="items-list">
        <AnimatePresence>
          {items.map((item, index) => (
            <motion.li
              key={item + index}
              className="list-item"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: 20, height: 0, marginBottom: 0 }}
              transition={{ duration: 0.3 }}
            >
              {item}
              <button className="remove-btn" onClick={() => removeItem(index)}>
                ❌
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  )
}

export default Items
