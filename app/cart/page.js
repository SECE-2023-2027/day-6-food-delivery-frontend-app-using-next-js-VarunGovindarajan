'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    alert('✅ Thank you for your purchase!');
    localStorage.removeItem('cart');
    window.location.replace('/'); // clears history so back doesn't return to cart
  };

  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price, 0);
  };

  if (cartItems.length === 0) {
    return (
      <div style={styles.wrapper}>
        <h2>Your cart is empty 🛒</h2>
        <Link href="/" style={styles.homeLink}>← Go to Home</Link>
      </div>
    );
  }

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>Your Cart 🛍️</h2>
      <div style={styles.cartGrid(cartItems.length)}>
        {cartItems.map((item) => (
          <div key={item.id} style={styles.card}>
            <img src={item.image} alt={item.name} style={styles.image} />
            <div style={styles.details}>
              <h4>{item.name}</h4>
              <p style={styles.price}>₹{item.price}</p>
              <p style={styles.rating}>{'⭐'.repeat(Math.floor(item.rating))}</p>
              <button onClick={() => removeFromCart(item.id)} style={styles.removeBtn}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <h3>Total: ₹{getTotal()}</h3>

      <button onClick={handleCheckout} style={styles.checkoutBtn}>Checkout</button>

      <Link href="/" style={styles.homeLink}>← Continue Shopping</Link>
    </div>
  );
}

const styles = {
  wrapper: {
    padding: '30px',
    minHeight: '100vh',
    backgroundColor: '#f8f9fa'
  },
  heading: {
    fontSize: '28px',
    marginBottom: '20px'
  },
cartGrid: (length) => ({
  display: 'grid',
  gridTemplateColumns: length === 1 ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
  justifyContent: length === 1 ? 'center' : 'initial',
  gap: '20px'
}),

card: {
  background: '#fff',
  borderRadius: '10px',
  padding: '15px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '400px',
  width: '100%',
  margin: '0 auto'  // center when single
},

  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '6px'
  },
  details: {
    marginTop: '10px',
    textAlign: 'center'
  },
  price: {
    color: '#e91e63',
    fontWeight: 'bold'
  },
  rating: {
    color: '#ff9800',
    margin: '5px 0'
  },
  removeBtn: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '5px',
    marginTop: '10px',
    cursor: 'pointer'
  },
  checkoutBtn: {
    marginTop: '20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '12px 20px',
    fontSize: '16px',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  homeLink: {
    display: 'inline-block',
    marginTop: '20px',
    textDecoration: 'none',
    color: '#007bff'
  }
};
