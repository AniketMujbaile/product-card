import React from 'react';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { name, description, price, image } = product;

  return (
    <div className="w-full max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
          New
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        <div>
          <h2 className="text-xl font-bold text-gray-800 truncate">
            {name}
          </h2>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
            {description}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">₹{price.toFixed(2)}</span>
          <button 
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full 
                       hover:bg-blue-700 transition-colors 
                       active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <ShoppingCart size={18} />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;