import React from 'react';
import ProductCard from './components/ProductCard';
import productsData from './components/products.json';

function App() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productsData.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;