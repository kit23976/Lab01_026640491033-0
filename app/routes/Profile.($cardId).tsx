
import React from 'react';

interface ProfileProps {
  Code: number;
  Title: string;
  Cover: string;
  Description: string;
  Category: number;
  Author: string;
  Publishing: string;
  Price: number;
  Bestseller: boolean;
  FlashSale: boolean;
}

const Profile: React.FC<ProfileProps> = ({
  Code,
  Title,
  Cover,
  Description,
  Category,
  Author,
  Publishing,
  Price,
  Bestseller,
  FlashSale,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 relative">
      {FlashSale && (
        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-bl-lg">
          Sale
        </div>
      )}
      <img src={Cover} alt={Title} className="w-full h-auto rounded-md" />
      <h2 className="text-xl font-bold mt-2">{Title}</h2>
      <p className="text-gray-600">Author: {Author}</p>
      <p className="text-gray-600">Publishing: {Publishing}</p>
      <p className="text-gray-600">Price: ${Price}</p>
      <p className="text-gray-600">{Description}</p>

      <div id="btn-detail" className="mt-2">
        <a href={`/Profile/${Code}`}>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            View More
          </button>
        </a>
      </div>
    </div>
  );
  
};

export default Profile;
