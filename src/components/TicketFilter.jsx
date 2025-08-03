import { useState } from 'react';
import { getLocationColor } from '../utils/ticketUtils.jsx';

const TicketFilter = ({ activeFilter, onFilterChange, locations, isDarkMode }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`mb-8 ${isDarkMode ? 'backdrop-blur-md bg-gray-800/50 border-gray-700/50' : 'backdrop-blur-md bg-white/70 border-gray-200/50'} rounded-3xl shadow-2xl p-8 border-4 ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'} group hover:shadow-3xl transition-all duration-500 relative animated-border-purple`}>
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Filter Tickets</h2>
          <button
            onClick={toggleExpand}
            className={`p-3 rounded-2xl transition-all hover:scale-110 hover:shadow-lg transform duration-300 ease-out ${isDarkMode ? 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            aria-label={isExpanded ? 'Collapse filters' : 'Expand filters'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div className={`transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-20 opacity-100'} overflow-hidden`}>
          {/* Status Filter */}
          <div className="mb-6">
            <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Status</h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => onFilterChange('all')}
                className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all hover:scale-105 hover:shadow-lg transform duration-300 ease-out ${activeFilter === 'all' ? 'bg-primary-600 text-white shadow-lg' : (isDarkMode ? 'bg-gray-700/50 text-gray-200 hover:bg-gray-600/50 border border-gray-600/50' : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200')}`}
              >
                All Tickets
              </button>
              <button
                onClick={() => onFilterChange('available')}
                className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all hover:scale-105 hover:shadow-lg transform duration-300 ease-out ${activeFilter === 'available' ? 'bg-green-600 text-white shadow-lg' : (isDarkMode ? 'bg-gray-700/50 text-gray-200 hover:bg-gray-600/50 border border-gray-600/50' : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200')}`}
              >
                Available
              </button>
              <button
                onClick={() => onFilterChange('used')}
                className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all hover:scale-105 hover:shadow-lg transform duration-300 ease-out ${activeFilter === 'used' ? 'bg-gray-600 text-white shadow-lg' : (isDarkMode ? 'bg-gray-700/50 text-gray-200 hover:bg-gray-600/50 border border-gray-600/50' : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200')}`}
              >
                Used
              </button>
            </div>
          </div>

          {/* Location Filter */}
          {locations && locations.length > 0 && (
            <div className="mb-4">
              <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Locations</h3>
              <div className="flex flex-wrap gap-3">
                {locations.map(location => (
                  <button
                    key={location}
                    onClick={() => onFilterChange(`location-${location}`)}
                    className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all hover:scale-105 hover:shadow-lg transform duration-300 ease-out ${activeFilter === `location-${location}` ? `${getLocationColor(location).split(' ')[0]} text-white shadow-lg` : (isDarkMode ? 'bg-gray-700/50 text-gray-200 hover:bg-gray-600/50 border border-gray-600/50' : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200')}`}
                  >
                    <div className="flex items-center">
                      <span className={`w-3 h-3 rounded-full mr-3 ${getLocationColor(location).split(' ')[0]}`}></span>
                      {location}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketFilter;