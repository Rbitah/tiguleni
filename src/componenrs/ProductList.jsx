import React from 'react';
import ProductCard from './ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const products = [
  {
    id: 1,
    name: 'HP ProBook G4 i9 2024',
    price: 'Mkw1200000',
    rating: 5,
    reviews: 76,
    image: 'path-to-image.jpg', // Replace with the correct image path
  },{
    id: 2,
    name: 'HP ProBook G4 i9 2024',
    price: 'Mkw1200000',
    rating: 5,
    reviews: 76,
    image: 'path-to-image.jpg', // Replace with the correct image path
  },{
    id: 3,
    name: 'HP ProBook G4 i9 2024',
    price: 'Mkw1200000',
    rating: 5,
    reviews: 76,
    image: 'path-to-image.jpg', // Replace with the correct image path
  },{
    id: 4,
    name: 'HP ProBook G4 i9 2024',
    price: 'Mkw1200000',
    rating: 5,
    reviews: 76,
    image: 'path-to-image.jpg', // Replace with the correct image path
  },{
    id: 5,
    name: 'HP ProBook G4 i9 2024',
    price: 'Mkw1200000',
    rating: 5,
    reviews: 76,
    image: 'path-to-image.jpg', // Replace with the correct image path
  },{
    id: 6,
    name: 'HP ProBook G4 i9 2024',
    price: 'Mkw1200000',
    rating: 5,
    reviews: 76,
    image: 'path-to-image.jpg', // Replace with the correct image path
  },
  // Add more products as needed
];

const ProductList = () => {
  return (
    <section className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-red-500">New Products</h2>
      </div>
      <h3 className="text-2xl font-bold mb-6">Recently Added</h3>
      <div className="relative">
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <div className="flex space-x-4 overflow-x-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </section>
  );
};

export default ProductList;
