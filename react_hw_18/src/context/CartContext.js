import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCartItems = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://682d82ec4fae188947564789.mockapi.io/cart');
            setCartItems(response.data);
            setError(null);
        } catch (err) {
            setError(err.message || 'Failed to fetch cart items');
            console.error("Error fetching cart items:", err);
        } finally {
            setLoading(false);
        }
    };

    const addToCart = async (product) => {
        try {
            setLoading(true);
            const response = await axios.post('https://682d82ec4fae188947564789.mockapi.io/cart', product);
            setCartItems(prev => [...prev, response.data]);
            setError(null);
        } catch (err) {
            setError(err.message || 'Failed to add item to cart');
            console.error("Error adding to cart:", err);
        } finally {
            setLoading(false);
        }
    };

    const deleteFromCart = async (productId) => {
        try {
            setLoading(true);
            await axios.delete(`https://682d82ec4fae188947564789.mockapi.io/cart/${productId}`);
            setCartItems(prev => prev.filter(item => item.id !== productId));
            setError(null);
        } catch (err) {
            setError(err.message || 'Failed to delete item from cart');
            console.error("Error deleting from cart:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCartItems();
    }, []);

    return (
        <CartContext.Provider value={{ 
            cartItems, 
            addToCart, 
            deleteFromCart, 
            fetchCartItems,
            loading,
            error
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;