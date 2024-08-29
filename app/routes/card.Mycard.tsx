
import React, { useState } from 'react';
import { cards } from './data';
import Profile from './Profile.($cardId)';

const MyCards: React.FC = () => {

  const [filter, setFilter] = useState<'bestseller' | 'non-bestseller' | 'sale' | 'all'>('all');

  const filteredItems = cards.filter((card) => {
    switch (filter) {
      case 'bestseller':
        return card.Bestseller;
      case 'non-bestseller':
        return !card.Bestseller;
      case 'sale':
        return card.FlashSale;
      case 'all':
        return true; 
      default:
        return true;
    }
  });

  const cardItems = filteredItems.map((card) => (
    <Profile
      key={card.Code}
      Code={card.Code}
      Title={card.Title}
      Cover={card.Cover}
      Description={card.Description}
      Category={card.Category}
      Author={card.Author}
      Publishing={card.Publishing}
      Price={card.Price}
      Bestseller={card.Bestseller}
      FlashSale={card.FlashSale}
    />
  ));

  return (
    <main className="container mx-auto p-4">
      <section className="banner bg-gray-200 p-4 rounded-xl">
        <h1 className="text-3xl font-bold mb-4">My Cards</h1>
        <div className="mb-4">
        <button
            className={`bg-gray-700 text-white p-3 rounded-xl ml-3 ${filter === 'all' ? 'opacity-50' : ''}`}
            onClick={() => setFilter('all')}
            disabled={filter === 'all'}
          >
            แสดงทั้งหทด
          </button>
          <button
            className={`bg-green-700 text-white p-3 rounded-xl ${filter === 'bestseller' ? 'opacity-50' : ''}`}
            onClick={() => setFilter('bestseller')}
            disabled={filter === 'bestseller'}
          >
            ขายดี
          </button>
          <button
            className={`bg-green-700 text-white p-3 rounded-xl ml-3 ${filter === 'non-bestseller' ? 'opacity-50' : ''}`}
            onClick={() => setFilter('non-bestseller')}
            disabled={filter === 'non-bestseller'}
          >
            ขายไม่ดี
          </button>
          <button
            className={`bg-red-700 text-white p-3 rounded-xl ml-3 ${filter === 'sale' ? 'opacity-50' : ''}`}
            onClick={() => setFilter('sale')}
            disabled={filter === 'sale'}
          >
            Sale
          </button>

        </div>
        <div className="cards bg-gray-200 rounded-xl p-4">
          {cardItems.length > 0 ? cardItems : <p>No cards available</p>}
        </div>
      </section>
    </main>
  );
};

export default MyCards;
