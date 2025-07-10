'use client';

import Link from 'next/link';

export default function Help() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Need Help?</h1>
      <p style={styles.text}>
        If you have any questions or issues while using our store, we're here to help!
      </p>

      <div style={styles.section}>
        <h3>🛒 How to Add Products to Cart</h3>
        <p>Go to any product page and click on <strong>"Add to Cart"</strong>. You can view your cart anytime from the navigation bar.</p>
      </div>

      <div style={styles.section}>
        <h3>💳 How to Checkout</h3>
        <p>Visit the Cart page, click <strong>Checkout</strong>, and you'll see a confirmation message and be redirected home.</p>
      </div>

      <div style={styles.section}>
        <h3>❓ Still Need Help?</h3>
        <p>Email us at <a href="mailto:support@buycom.com">support@buycom.com</a> and we’ll get back to you shortly.</p>
      </div>

      <Link href="/" style={styles.homeLink}>← Back to Home</Link>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px',
    maxWidth: '700px',
    margin: 'auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    minHeight: '100vh'
  },
  title: {
    fontSize: '32px',
    marginBottom: '20px'
  },
  text: {
    fontSize: '16px',
    marginBottom: '30px'
  },
  section: {
    marginBottom: '25px',
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
  },
  homeLink: {
    marginTop: '20px',
    display: 'inline-block',
    color: '#007bff',
    textDecoration: 'none'
  }
};
