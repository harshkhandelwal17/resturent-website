import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import menu from './products.js'

const InteractiveMenu = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (categoryIndex) => {
    setExpandedCategory(expandedCategory === categoryIndex ? null : categoryIndex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-4 " id='menu'>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Our Menu</h1>
          <p className="text-gray-600">Delicious food, made with love</p>
        </div>

        {/* Category Cards */}
        <div className="space-y-6">
          {menu.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Category Header Card */}
              <div 
                className="cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleCategory(categoryIndex)}
              >
                <div className="flex items-center p-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={category.categoryImage} 
                      alt={category.category}
                      className="w-24 h-24 object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="ml-6 flex-grow">
                    <h2 className="text-2xl  text-gray-800 mb-2">{category.category}</h2>
                    <p className="text-gray-600">{category.items.length} items available</p>
                  </div>
                  <div className="flex-shrink-0">
                    {expandedCategory === categoryIndex ? (
                      <ChevronUp className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded Items */}
              {expandedCategory === categoryIndex && (
                <div className="border-t border-gray-200 bg-gray-50">
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-4">
                            <h3 className="text-lg text-gray-800 mb-2">{item.name}</h3>
                            {item.description && (
                              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                            )}
                            <div className="flex justify-between items-center">
                              <span className="text-2xl font-bold text-orange-600">₹{item.price}</span>
                              {/* <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                                Add to Cart
                              </button> */}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveMenu;