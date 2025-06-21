import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { CheckoutFormData, CheckoutFormErrors } from '../types';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import { CreditCardIcon, InformationCircleIcon, ShoppingBagIcon } from '../components/IconComponents';

const CheckoutPage: React.FC = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const cartTotal = getCartTotal();

  const initialFormData: CheckoutFormData = {
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'United States', // Default country
    cardholderName: '',
    cardNumber: '',
    expiryDate: '', // MM/YY
    cvv: '',
  };

  const [formData, setFormData] = useState<CheckoutFormData>(initialFormData);
  const [errors, setErrors] = useState<CheckoutFormErrors>({});
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof CheckoutFormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: CheckoutFormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.postalCode.trim()) {
        newErrors.postalCode = "Postal code is required.";
    } else if (!/^\d{5}(-\d{4})?$/.test(formData.postalCode) && formData.country === "United States") {
        newErrors.postalCode = "Invalid US postal code.";
    }
    if (!formData.country.trim()) newErrors.country = "Country is required.";
    
    if (!formData.cardholderName.trim()) newErrors.cardholderName = "Cardholder name is required.";
    if (!formData.cardNumber.trim()) {
        newErrors.cardNumber = "Card number is required.";
    } else if (!/^\d{13,19}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
        newErrors.cardNumber = "Invalid card number.";
    }
    if (!formData.expiryDate.trim()) {
        newErrors.expiryDate = "Expiry date is required.";
    } else if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(formData.expiryDate)) {
        newErrors.expiryDate = "Invalid expiry date (MM/YY).";
    }
    if (!formData.cvv.trim()) {
        newErrors.cvv = "CVV is required.";
    } else if (!/^\d{3,4}$/.test(formData.cvv)) {
        newErrors.cvv = "Invalid CVV.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsProcessing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    alert('Order placed successfully! Thank you for your purchase.');
    clearCart();
    navigate('/'); 
  };
  
  const FormInput: React.FC<{name: keyof CheckoutFormData, label: string, type?: string, placeholder?: string, autoComplete?: string, colSpan?: string }> = 
    ({ name, label, type = "text", placeholder, autoComplete, colSpan = "sm:col-span-1" }) => (
    <div className={colSpan}>
      <label htmlFor={name} className="block text-sm font-medium text-neutral-dark">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
          errors[name] ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-neutral-light focus:ring-primary focus:border-primary'
        }`}
      />
      {errors[name] && <p className="mt-1 text-xs text-red-600">{errors[name]}</p>}
    </div>
  );


  if (cartItems.length === 0 && !isProcessing) { // Don't redirect if processing payment
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center animate-fadeIn">
        <ShoppingBagIcon className="h-24 w-24 mx-auto text-neutral mb-8" />
        <h1 className="text-3xl font-bold font-serif text-neutral-dark mb-4">Your Cart is Empty</h1>
        <p className="text-neutral mb-8">Please add courses to your cart before proceeding to checkout.</p>
        <Button to="/courses" variant="primary" size="lg">
          Browse Courses
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-neutral-light min-h-screen py-12 animate-fadeIn">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Checkout" centered />

        <div className="lg:flex lg:gap-12">
          {/* Checkout Form */}
          <div className="lg:w-2/3 bg-white p-6 sm:p-8 rounded-xl shadow-interactive mb-8 lg:mb-0">
            <form onSubmit={handleSubmit}>
              <section className="mb-8">
                <h2 className="text-xl font-semibold font-serif text-neutral-dark mb-4 border-b pb-3">Billing Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  <FormInput name="fullName" label="Full Name" autoComplete="name" colSpan="sm:col-span-2" />
                  <FormInput name="email" label="Email Address" type="email" autoComplete="email" colSpan="sm:col-span-2" />
                  <FormInput name="address" label="Street Address" autoComplete="street-address" colSpan="sm:col-span-2" />
                  <FormInput name="city" label="City" autoComplete="address-level2" />
                  <FormInput name="postalCode" label="Postal Code / ZIP" autoComplete="postal-code" />
                  <div className="sm:col-span-2">
                    <label htmlFor="country" className="block text-sm font-medium text-neutral-dark">Country</label>
                    <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        value={formData.country}
                        onChange={handleChange}
                        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
                            errors.country ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-neutral-light focus:ring-primary focus:border-primary'
                        }`}
                    >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                        {/* Add more countries as needed */}
                    </select>
                    {errors.country && <p className="mt-1 text-xs text-red-600">{errors.country}</p>}
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold font-serif text-neutral-dark mb-4 border-b pb-3 flex items-center">
                  <CreditCardIcon className="h-6 w-6 mr-2 text-primary" /> Payment Details
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  <FormInput name="cardholderName" label="Cardholder Name" autoComplete="cc-name" colSpan="sm:col-span-2" />
                  <FormInput name="cardNumber" label="Card Number" placeholder="•••• •••• •••• ••••" autoComplete="cc-number" colSpan="sm:col-span-2" />
                  <FormInput name="expiryDate" label="Expiry Date (MM/YY)" placeholder="MM/YY" autoComplete="cc-exp" />
                  <FormInput name="cvv" label="CVV" placeholder="•••" autoComplete="cc-csc" />
                </div>
              </section>
              
              <div className="mt-10">
                <Button type="submit" fullWidth size="lg" disabled={isProcessing}>
                  {isProcessing ? 'Processing...' : `Place Order (\$${cartTotal.toFixed(2)})`}
                </Button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3 lg:sticky lg:top-24 h-fit">
            <div className="bg-white shadow-subtle rounded-xl p-6">
              <h2 className="text-xl font-semibold font-serif text-neutral-dark mb-4 border-b pb-3">Order Summary</h2>
              <ul className="divide-y divide-neutral-light mb-6">
                {cartItems.map(item => (
                  <li key={item.id} className="py-3 flex items-center justify-between">
                    <div className="flex items-center">
                        <img src={item.thumbnailUrl} alt={item.title} className="w-16 h-12 object-cover rounded mr-3"/>
                        <div>
                            <p className="text-sm font-medium text-neutral-dark">{item.title}</p>
                            <p className="text-xs text-neutral">{item.instructor}</p>
                        </div>
                    </div>
                    <p className="text-sm font-semibold text-primary">${item.price.toFixed(2)}</p>
                  </li>
                ))}
              </ul>
              <div className="space-y-2 text-sm border-t pt-4">
                <div className="flex justify-between text-neutral">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-neutral">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                {/* Add taxes if applicable */}
                <div className="flex justify-between text-lg font-bold text-neutral-dark pt-2 border-t mt-2">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>
               <div className="mt-6 p-3 bg-primary/10 rounded-md text-sm text-primary flex items-start">
                    <InformationCircleIcon className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <p>All transactions are secure and encrypted. Your payment information will not be stored on our servers.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;