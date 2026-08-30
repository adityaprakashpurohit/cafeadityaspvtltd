import { createContext, useState, useEffect, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('brew_bloom_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('brew_bloom_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item, quantity = 1, options = {}) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(
        cartItem => cartItem.id === item.id && JSON.stringify(cartItem.options) === JSON.stringify(options)
      );
      
      if (existingItemIndex >= 0) {
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += quantity;
        return newCart;
      } else {
        return [...prevCart, { ...item, quantity, options }];
      }
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    setCart(prevCart => {
      const newCart = [...prevCart];
      newCart.splice(index, 1);
      return newCart;
    });
  };

  const increaseQuantity = (index) => {
    setCart(prevCart => {
      const newCart = [...prevCart];
      newCart[index].quantity += 1;
      return newCart;
    });
  };

  const decreaseQuantity = (index) => {
    setCart(prevCart => {
      const newCart = [...prevCart];
      if (newCart[index].quantity > 1) {
        newCart[index].quantity -= 1;
      }
      return newCart;
    });
  };

  const clearCart = () => setCart([]);

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      clearCart,
      getCartTotal,
      getCartItemCount,
      isCartOpen,
      setIsCartOpen
    }}>
      {children}
    </CartContext.Provider>
  );
};
