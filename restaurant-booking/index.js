import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Our Restaurant</h1>
      <Link href="/booking">
        <a>Book a Table</a>
      </Link>
    </div>
  );
};

export default Home;