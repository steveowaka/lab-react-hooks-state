import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import styles from './styles/DarkMode.module.css'

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [darkMode, setDarkMode] = useState(false)
  // TODO: Implement state for cart management
  const [cart, setCart] = useState([])
  // TODO: Implement state for category filtering
   const [category, setCategory] = useState('all')


    const handleAddToCart = (product) => {
    setCart([...cart, product])
    }


  return (
    <div className={darkMode ? styles.dark : styles.light}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}

        <DarkModeToggle
        darkMode={darkMode}
        onToggle={() => setDarkMode(!darkMode)}
      />

      <br />
      <br />

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList category={category} onAddToCart={handleAddToCart} />

      {/* TODO: Implement and render Cart component */}
      <Cart cartItems={cart} />
    </div>
  )
}

export default App
