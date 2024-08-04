import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />);
      } else if (i - rating === 0.5) {
        stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} className="text-yellow-500" />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="py-4 ml-10 space-x-4 border-0 flex flex-col justify-center relative">
      <div className="relative rounded-md h-[270px] bg-gray-200 w-[270px]">
        <img src={product.image} alt={product.name} className="h-full w-full object-contain" />
        <button className="absolute top-2 right-2 p-2 rounded-full hover:bg-gray-300">
          <FontAwesomeIcon icon={farHeart} />
        </button>
        <button className="absolute bottom-2 right-2 p-2  rounded-full hover:bg-gray-300">
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
      <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
      <p className="text-red-500">{product.price}</p>
      <div className="flex items-center mt-2">
        {renderStars(product.rating)}
        <span className="ml-2 text-gray-600">({product.reviews})</span>
      </div>
    </div>
  );
};

export default ProductCard;
