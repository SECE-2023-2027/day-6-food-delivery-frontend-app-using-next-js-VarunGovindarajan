'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import './carousel.css';
import { topBuys, allProducts } from '../lib/products';

const Carousel = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
  };

  return (
    <>
      <div className="carousel-wrapper">
        <div className="carousel-header">
          <h2>Top Buys of the Day</h2>
          <div className="carousel-buttons">
            <button onClick={() => scroll('left')}>&#8592;</button>
            <button onClick={() => scroll('right')}>&#8594;</button>
          </div>
        </div>

        <div className="carousel-container" ref={scrollRef}>
          {topBuys.map((item) => (
            <div className="carousel-item" key={item.id}>
              <Link href={`/product/${item.id}`}>
                <img src={item.image} alt={item.name} />
              </Link>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>

    <div className="all-products-grid">
  {allProducts.map((item) => (
    <div className="product-card" key={item.id}>
      <Link href={`/product/${item.id}`}>
        <img src={item.image} alt={item.name} />
      </Link>
      <h4>{item.name}</h4>
      <p className="price">₹{item.price}</p>
      <p className="stars">{'⭐'.repeat(Math.floor(item.rating))}</p>
    </div>
  ))}
</div>

    </>
  );
};

export default Carousel;
