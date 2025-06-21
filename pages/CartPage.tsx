import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import { TrashIcon, ShoppingBagIcon } from '../components/IconComponents';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, clearCart, getCartTotal } = useCart();
  const cartTotal = getCartTotal();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center animate-fadeIn">
        <ShoppingBagIcon className="h-24 w-24 mx-auto text-neutral mb-8" />
        <h1 className="text-3xl font-bold font-serif text-neutral-dark mb-4">Your Cart is Empty</h1>
        <p className="text-neutral mb-8">Looks like you haven't added any courses to your cart yet.</p>
        <Button to="/courses" variant="primary" size="lg">
          Browse Courses
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn">
      <SectionTitle title="Your Shopping Cart" centered />

      <div className="lg:flex lg:gap-12">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white shadow-subtle rounded-xl overflow-hidden">
            <ul className="divide-y divide-neutral-light">
              {cartItems.map(item => (
                <li key={item.id} className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <img 
                      src={item.thumbnailUrl} 
                      alt={item.title} 
                      className="w-24 h-16 sm:w-32 sm:h-20 object-cover rounded-md mr-4"
                    />
                    <div>
                      <Link to={`/courses/${item.id}`} className="text-lg font-semibold text-neutral-dark hover:text-primary transition-colors">
                        {item.title}
                      </Link>
                      <p className="text-sm text-neutral">By {item.instructor}</p>
                    </div>
                  </div>
                  <div className="flex items-center w-full sm:w-auto justify-between">
                    <p className="text-lg font-semibold text-primary mr-4 sm:mr-8">${item.price.toFixed(2)}</p>
                    <Button 
                      onClick={() => removeFromCart(item.id)} 
                      variant="ghost" 
                      size="sm" 
                      className="text-red-500 hover:bg-red-500/10"
                      aria-label={`Remove ${item.title} from cart`}
                    >
                      <TrashIcon className="h-5 w-5" />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex justify-end">
            <Button onClick={clearCart} variant="outline" className="border-red-500 text-red-500 hover:bg-red-500/10">
              Clear Cart
            </Button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3 mt-8 lg:mt-0 lg:sticky lg:top-24 h-fit">
          <div className="bg-white shadow-interactive rounded-xl p-6">
            <h2 className="text-2xl font-semibold font-serif text-neutral-dark mb-6 border-b pb-4">Order Summary</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-neutral">
                <span>Subtotal ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              {/* Add discounts or taxes here if needed */}
              <div className="flex justify-between text-xl font-bold text-neutral-dark pt-3 border-t">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>
            <Button to="/checkout" fullWidth size="lg">
              Proceed to Checkout
            </Button>
            <p className="text-xs text-neutral text-center mt-4">
              Secure payment processing. You can review your order before purchase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;