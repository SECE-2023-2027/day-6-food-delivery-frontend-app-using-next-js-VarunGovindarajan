'use client';

import { useParams } from 'next/navigation';
import { allProducts } from '@/app/lib/products';
import Link from 'next/link';

export default function ProductPage() {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === Number(id));

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const exists = cart.find((item) => item.id === product.id);

    if (!exists) {
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('✅ Added to cart!');
    } else {
      alert('⚠️ Product already in cart!');
    }
  };

  if (!product) return <p>❌ Product not found.</p>;

  return (
    <>
   <div style={styles.container}>
  <div style={styles.card}>
    {/* Main Product Display */}
    <img src={product.image} alt={product.name} style={styles.image} />
    <div style={styles.details}>
      <h2 style={styles.title}>{product.name}</h2>
      <p style={styles.price}>₹{product.price}</p>
      <p style={styles.rating}>{'⭐'.repeat(Math.floor(product.rating))} ({product.rating})</p>
      <p style={styles.description}>{product.description}</p>
      <button onClick={handleAddToCart} style={styles.button}>Add to Cart</button>
      <Link href="/" style={styles.backLink}>← Back to Home</Link>
    </div>
  </div>

  {/* Suggested Products */}
  <div style={styles.suggestedSection}>
    <h3 style={styles.suggestedHeading}> --You might also like--</h3>
    <div style={styles.suggestedGrid}>
      {allProducts
        .filter((item) => item.id !== product.id)
        .slice(0, 4)
        .map((item) => (
          <div key={item.id} style={styles.suggestedCard}>
            <a href={`/product/${item.id}`}>
              <img src={item.image} alt={item.name} style={styles.suggestedImage} />
              <p style={styles.suggestedName}>{item.name}</p>
              <p style={styles.suggestedPrice}>₹{item.price}</p>
            </a>
          </div>
        ))}
    </div>
  </div>
</div>

</>
  );
}

const styles = {
  container: {
    padding: '30px',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  image: {
    width: '100%',
    height: '280px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '20px'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  title: {
    fontSize: '24px',
    marginBottom: '5px'
  },
  price: {
    fontSize: '20px',
    color: '#e91e63',
    fontWeight: 'bold'
  },
  rating: {
    fontSize: '16px',
    color: '#ff9800'
  },
  description: {
    fontSize: '16px',
    lineHeight: '1.5'
  },
  button: {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    fontSize: '16px',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '10px'
  },
  backLink: {
    textDecoration: 'none',
    marginTop: '10px',
    fontSize: '14px',
    color: '#555'
  },
  suggestedSection: {
  marginTop: '40px'
},
suggestedHeading: {
  fontSize: '22px',
  marginBottom: '20px'
},
suggestedGrid: {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gap: '20px'
},
suggestedCard: {
  background: '#fff',
  border: '1px solid #e0e0e0',
  borderRadius: '10px',
  padding: '10px',
  textAlign: 'center',
  boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
},
suggestedImage: {
  width: '100%',
  height: '120px',
  objectFit: 'cover',
  borderRadius: '6px'
},
suggestedName: {
  marginTop: '10px',
  fontWeight: '500',
  fontSize: '14px'
},
suggestedPrice: {
  color: '#e91e63',
  fontWeight: 'bold',
  marginTop: '4px',
  fontSize: '13px'
}

};
