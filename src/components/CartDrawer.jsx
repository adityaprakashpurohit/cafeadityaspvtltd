import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from './Button';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, increaseQuantity, decreaseQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
  const subtotal = getCartTotal();
  const taxes = subtotal * 0.05;
  const total = subtotal + taxes;

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-brand-espresso/50 backdrop-blur-sm z-[60] transition-opacity animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-brand-cream z-[70] shadow-2xl flex flex-col border-l border-brand-beige transform transition-transform duration-300">
        <div className="flex items-center justify-between p-6 border-b border-brand-beige">
          <h2 className="font-display text-2xl text-brand-espresso">Your Order</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-brand-beige rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-brand-espresso/60 space-y-4">
              <div className="w-24 h-24 bg-brand-beige rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl">☕</span>
              </div>
              <h3 className="font-display text-xl text-brand-espresso">Your cart is waiting</h3>
              <p>Looks like you haven't added anything yet.</p>
              <Button onClick={() => setIsCartOpen(false)} className="mt-4">Explore Menu</Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-brand-espresso/60">{cart.length} item{cart.length !== 1 ? 's' : ''}</span>
                <button onClick={clearCart} className="text-sm text-brand-terracotta hover:underline">Clear all</button>
              </div>
              {cart.map((item, index) => (
                <div key={`${item.id}-${index}`} className="flex gap-4">
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-brand-beige shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-brand-espresso leading-tight pr-2">{item.name}</h4>
                      <p className="font-medium">₹{item.price}</p>
                    </div>
                    {item.options && Object.keys(item.options).length > 0 && (
                      <p className="text-xs text-brand-espresso/60 mt-1">
                        {Object.values(item.options).join(', ')}
                      </p>
                    )}
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center gap-3 bg-white rounded-full px-2 py-1 border border-brand-beige shadow-sm">
                        <button onClick={() => decreaseQuantity(index)} className="p-1 hover:text-brand-terracotta transition-colors"><Minus size={14} /></button>
                        <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                        <button onClick={() => increaseQuantity(index)} className="p-1 hover:text-brand-terracotta transition-colors"><Plus size={14} /></button>
                      </div>
                      <button onClick={() => removeFromCart(index)} className="p-2 text-brand-espresso/40 hover:text-brand-terracotta transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {cart.length > 0 && (
          <div className="p-6 bg-white border-t border-brand-beige shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
            <div className="space-y-3 mb-6 text-sm">
              <div className="flex justify-between text-brand-espresso/80">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-brand-espresso/80">
                <span>Taxes (5%)</span>
                <span>₹{taxes.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-medium text-lg pt-3 border-t border-brand-beige text-brand-espresso">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>
            <Button variant="primary" className="w-full py-4 text-lg">Checkout • ₹{total.toFixed(2)}</Button>
          </div>
        )}
      </div>
    </>
  );
}
