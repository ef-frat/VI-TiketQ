import { SunIcon, MoonIcon } from './icons/index.jsx';

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="relative py-8 mb-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-pattern-dots"></div>
        <div className="absolute inset-0 bg-pattern-grid"></div>
        <div className="absolute inset-0 bg-pattern-hex"></div>
      </div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
              Ticket Collection
            </h1>
            <p className="text-xl text-white/80">
              Manage your digital tickets and collectibles
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="backdrop-blur-md bg-white/10 border border-white/20 px-4 py-3 rounded-2xl flex items-center transition-all hover:bg-white/20 cursor-pointer hover:scale-110 transform duration-300 shadow-lg hover:shadow-xl"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? (
                <SunIcon className="h-6 w-6 text-white" />
              ) : (
                <MoonIcon className="h-6 w-6 text-white" />
              )}
            </button>
            
            {/* My Collection button */}
            <button className="backdrop-blur-md bg-white/10 border border-white/20 px-6 py-3 rounded-2xl text-white font-semibold transition-all hover:bg-white/20 cursor-pointer hover:scale-110 transform duration-300 shadow-lg hover:shadow-xl">
              My Collection
            </button>
            
            {/* Add Ticket button */}
            <button className="backdrop-blur-md bg-gradient-to-r from-primary-500 to-primary-600 border border-primary-400/30 px-6 py-3 rounded-2xl text-white font-semibold transition-all hover:from-primary-600 hover:to-primary-700 cursor-pointer hover:scale-110 transform duration-300 shadow-lg hover:shadow-xl">
              Add Ticket
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;