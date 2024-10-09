import React, { useState } from 'react';

import { FaSearch } from 'react-icons/fa';
import Card from './Card';

const SearchBar = ({ setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Example of search logic (replace with actual search functionality)
    const filteredResults = mockData.filter(item =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(filteredResults); // Update parent state with search results
  };

  return (
    <div className="flex gap-2">
      <select name="All categories" className="border border-gray-300 rounded px-3 py-2 w-[20vw] focus:outline-none focus:border-blue-500">
        <option value="1">ALL Categories</option>
        <option value="2">Bags & Shoes</option>
        <option value="3">Computer Offices</option>
      </select>

      <div className="flex items-center border border-blue-800 rounded-lg px-3">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search..."
          className="w-full py-2 px-2 outline-none text-gray-700"
        />
        <div className="p-2">
          <FaSearch className="text-gray-600" />
        </div>
      </div>
    </div>
  );
};

const POS = () => {
  const [searchResults, setSearchResults] = useState([]);

  // Example data for demonstration
  const mockData = [
    { id: 1, title: 'Product 1', description: 'Description of Product 1...', price: '$99' },
    { id: 2, title: 'Product 2', description: 'Description of Product 2...', price: '$149' },
    { id: 3, title: 'Product 3', description: 'Description of Product 3...', price: '$199' },
    { id: 4, title: 'Product 4', description: 'Description of Product 4...', price: '$249' },
    // Add more mock data as needed
  ];

  return (
    <>
      <div className='flex bg-white w-full h-full p-4'>
        {/* Product Section */}
        <div className='bg-white w-[45vw] h-[100vh] pt-3 mt-6 mr-6 ml-5 mb-6 rounded-lg border-gray-200 border-2 px-6 py-5 overflow-y-auto'>
          <p className='bg-[#F9FAFC] px-11 py-3 mt-0 rounded-lg'>Product Section</p>
          <div className='flex gap-2 mt-3 ml-3'>
            <SearchBar setSearchResults={setSearchResults} />
          </div>

          <div className="grid grid-cols-3 gap-4 p-4">
            {searchResults.length > 0 ? (
              searchResults.map((product) => (
                <Card
                  key={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                />
              ))
            ) : (
              // Render default cards if no search results
              mockData.map((product) => (
                <Card
                  key={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                />
              ))
            )}
          </div>
        </div>

        {/* Billing Section */}
        <div className='bg-white h-[80vh] w-[30vw] mt-8 mr-3 rounded-lg border-2 border-gray-200 overflow-y-auto'>
          <p className='bg-[#F9FAFC] px-11 py-3 mt-0 rounded-lg'>Billing Section</p>
          
          <button className='border-indigo-800 border mt-3 ml-48 mr-4 w-48 h-12 rounded bg-white text-indigo-800 hover:bg-indigo-800 hover:text-white transition-colors duration-300 ease-in-out'>View All Hold Orders</button>

          <div className='flex mt-1'>
            <select className="border border-[#afacac] mt-2 w-44 h-11 rounded ml-3">
              <option value="1">Walking Customer</option>
              <option value="2">Ali</option>
              <option value="3">Asad</option>
            </select>
            <button className='border-0 bg-[#52c970] w-44 h-11 ml-3 rounded text-white hover:bg-green-900 hover:white transition-colors duration-300 ease-in-out'>Add New Customer</button>
          </div>

          <div className='flex mt-1'>
            <select className="border border-[#afacac] mt-2 w-80 h-10 rounded ml-3">
              <option value="1">Walking Customer 378</option>
              <option value="2">Ali</option>
              <option value="3">Asad</option>
            </select>
            <button className='border-0 bg-[#EDEDED] w-36 h-10 ml-3 mt-2 mr-3 rounded text-black hover:bg-slate-600 hover:white transition-colors duration-300 ease-in-out'>Clear Cart</button>
          </div>

          <div className=''>
            <button className='border-0 bg-[#52c970] w-28 h-10 ml-3 mt-2 mr-3 rounded text-white  hover:white transition-colors duration-300 ease-in-out'>New Order</button>
          </div>

          <ul className='p-4' style={{ maxHeight: 'calc(80vh - 250px)' }}>
            <li className='flex justify-between items-center bg-[#F9FAFC] px-6 py-4 mb-2'>
              <span>Item</span>
              <span>Qty</span>
              <span>Price</span>
              <span>Delete</span>
            </li>
            <li className='flex justify-between items-center mb-2'>
              <span>Sub Total:</span>
              <span>$0.00</span>
            </li>
            <li className='flex justify-between items-center mb-2'>
              <span>Product Discount:</span>
              <span>$0.00</span>
            </li>
            <li className='flex justify-between items-center mb-2'>
              <span>Extra Discount:</span>
              <span>$0.00</span>
            </li>
            <li className='flex justify-between items-center mb-2'>
              <span>Coupon Discount:</span>
              <span>$0.00</span>
            </li>
            <li className='flex justify-between items-center mb-2'>
              <span>Tax:</span>
              <span>$0.00</span>
            </li>
          </ul>
          <div className='border-t-2 border-gray-500 flex'>
            <p className='text-lg ml-4'>Total</p>
            <p className='text-lg ml-[69%]'>$0.00</p>
          </div>
          <div className='mt-12 ml-4'>
            <p>Paid by</p>
          </div>
          <div className='flex mt-2 ml-4'>
            <button className='border-0 bg-[#39b920] w-24 h-10 ml-3 mr-3 rounded text-white duration-300 ease-in-out'>Cash</button>
            <button className='border-2 bg-white w-20 h-10 rounded text-black hover:bg-indigo-500 hover:white transition-colors duration-300 ease-in-out'>Card</button>
          </div>
          <div className='flex items-center mt-4'>
            <button className='border-0 bg-[#39b920] w-32 h-10 ml-5 rounded text-white hover:bg-rose-800 hover:white transition-colors duration-300 ease-in-out'>Cancel Order</button>
            <button className='border-0 bg-[#39b920] w-40 h-10 ml-5 rounded text-white hover:bg-[#04A3E7] hover:white transition-colors duration-300 ease-in-out'>Place Order</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default POS;
