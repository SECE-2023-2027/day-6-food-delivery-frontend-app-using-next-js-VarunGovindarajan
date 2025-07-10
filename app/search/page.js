'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.heading}>🔍 Search Products</h1>

      <div style={styles.searchBar}>
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.input}
        />
        <button style={styles.button}>Search</button>
      </div>

      <div style={styles.info}>

      </div>

      <Link href="/" style={styles.backLink}>← Back to Home</Link>
    </div>
  );
}

const styles = {
  wrapper: {
    padding: '40px',
    maxWidth: '600px',
    margin: 'auto',
    minHeight: '100vh',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px'
  },
  heading: {
    fontSize: '28px',
    marginBottom: '20px'
  },
  searchBar: {
    display: 'flex',
    gap: '10px',
    marginBottom: '30px'
  },
  input: {
    flex: 1,
    padding: '10px 15px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  info: {
    fontSize: '14px',
    color: '#666'
  },
  backLink: {
    display: 'inline-block',
    marginTop: '30px',
    color: '#007bff',
    textDecoration: 'none'
  }
};
