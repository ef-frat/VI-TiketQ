// Location color mappings
export const LOCATION_COLORS = {
  'Jakarta': 'bg-blue-500',
  'Belgium': 'bg-red-500',
  'Miami': 'bg-yellow-500',
  'Las Vegas': 'bg-purple-500',
  'California': 'bg-green-500',
  'Amsterdam': 'bg-orange-500',
  'New York': 'bg-indigo-500',
  'Netherlands': 'bg-pink-500',
  'Budapest': 'bg-teal-500',
  'Nevada': 'bg-gray-500'
};

export const LOCATION_COLORS_HEX = {
  'Jakarta': '3b82f6',
  'Belgium': 'ef4444',
  'Miami': 'eab308',
  'Las Vegas': 'a855f7',
  'California': '22c55e',
  'Amsterdam': 'f97316',
  'New York': '6366f1',
  'Netherlands': 'ec4899',
  'Budapest': '14b8a6',
  'Nevada': '6b7280'
};

// Utility functions
export const getLocationColor = (location) => {
  return LOCATION_COLORS[location] || 'bg-gray-500';
};

export const getLocationColorHex = (location) => {
  return LOCATION_COLORS_HEX[location] || '6b7280';
};

// Date formatting functions
export const formatDateTime = (dateTimeString) => {
  const date = new Date(dateTimeString);
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return date.toLocaleDateString(undefined, options);
};

export const formatDay = (dateTimeString) => {
  return new Date(dateTimeString).getDate();
};

export const formatMonth = (dateTimeString) => {
  return new Date(dateTimeString).toLocaleString('default', { month: 'short' });
};

// Generate ticket pattern
export const generateTicketPattern = (location) => {
  const colorHex = getLocationColorHex(location);
  return `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23${colorHex}' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`;
}; 