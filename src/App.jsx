import { useState, useEffect } from 'react'
import { tickets as initialTickets } from './data/tickets'
import Header from './components/Header'
import TicketCard from './components/TicketCard'
import TicketFilter from './components/TicketFilter'

function App() {
  // Sort initial tickets by date (closest date first)
  const sortedInitialTickets = [...initialTickets].sort((a, b) => new Date(a.time) - new Date(b.time))
  
  const [tickets, setTickets] = useState(sortedInitialTickets)
  const [filteredTickets, setFilteredTickets] = useState(sortedInitialTickets)
  const [activeFilter, setActiveFilter] = useState('all')
  const [isDarkMode, setIsDarkMode] = useState(true)
  
  // Extract unique locations from tickets
  const locations = [...new Set(tickets.map(ticket => ticket.location))]

  // Handle toggling the isUsed status of a ticket
  const handleToggleUsed = (ticketId) => {
    const updatedTickets = tickets.map(ticket => 
      ticket.id === ticketId ? { ...ticket, isUsed: !ticket.isUsed } : ticket
    )
    setTickets(updatedTickets)
  }

  // Filter and sort tickets based on the active filter
  useEffect(() => {
    let result = tickets
    
    if (activeFilter === 'available') {
      result = tickets.filter(ticket => !ticket.isUsed)
    } else if (activeFilter === 'used') {
      result = tickets.filter(ticket => ticket.isUsed)
    } else if (activeFilter.startsWith('location-')) {
      const location = activeFilter.replace('location-', '')
      result = tickets.filter(ticket => ticket.location === location)
    }
    
    // Sort tickets by date (closest date first)
    result.sort((a, b) => new Date(a.time) - new Date(b.time))
    
    setFilteredTickets(result)
  }, [tickets, activeFilter])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'} relative`}>
      {/* Subtle background pattern for the main container */}
      <div className={`absolute inset-0 opacity-5 ${isDarkMode ? 'bg-pattern-dots' : 'bg-pattern-grid'}`}></div>
      
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      <main className="container mx-auto px-6 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <div className="mb-8">
              <h2 className={`text-3xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>My Collection</h2>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Manage your digital tickets and collectibles</p>
            </div>
            
            <TicketFilter 
              activeFilter={activeFilter} 
              onFilterChange={setActiveFilter}
              locations={locations}
              isDarkMode={isDarkMode}
            />
            
            <div className={`${isDarkMode ? 'backdrop-blur-md bg-gray-800/50 border-gray-700/50' : 'backdrop-blur-md bg-white/70 border-gray-200/50'} rounded-3xl shadow-2xl p-8 mb-8 border-4 ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'} group hover:shadow-3xl transition-all duration-500 relative animated-border-green`}>
              <div className="relative z-10">
                <h3 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Collection Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className={`${isDarkMode ? 'bg-gradient-to-br from-blue-900/50 to-blue-800/50 border-blue-700/50' : 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200'} rounded-2xl p-4 border ${isDarkMode ? 'border-blue-700/50' : 'border-blue-200'} group hover:scale-105 transition-transform duration-300`}>
                    <p className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>Total Tickets</p>
                    <p className={`text-3xl font-bold ${isDarkMode ? 'text-blue-200' : 'text-blue-800'}`}>{tickets.length}</p>
                  </div>
                  <div className={`${isDarkMode ? 'bg-gradient-to-br from-green-900/50 to-green-800/50 border-green-700/50' : 'bg-gradient-to-br from-green-50 to-green-100 border-green-200'} rounded-2xl p-4 border ${isDarkMode ? 'border-green-700/50' : 'border-green-200'} group hover:scale-105 transition-transform duration-300`}>
                    <p className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-green-300' : 'text-green-700'}`}>Available</p>
                    <p className={`text-3xl font-bold ${isDarkMode ? 'text-green-200' : 'text-green-800'}`}>{tickets.filter(t => !t.isUsed).length}</p>
                  </div>
                  <div className={`${isDarkMode ? 'bg-gradient-to-br from-purple-900/50 to-purple-800/50 border-purple-700/50' : 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200'} rounded-2xl p-4 border ${isDarkMode ? 'border-purple-700/50' : 'border-purple-200'} group hover:scale-105 transition-transform duration-300`}>
                    <p className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-purple-300' : 'text-purple-700'}`}>Locations</p>
                    <p className={`text-3xl font-bold ${isDarkMode ? 'text-purple-200' : 'text-purple-800'}`}>{locations.length}</p>
                  </div>
                  <div className={`${isDarkMode ? 'bg-gradient-to-br from-orange-900/50 to-orange-800/50 border-orange-700/50' : 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200'} rounded-2xl p-4 border ${isDarkMode ? 'border-orange-700/50' : 'border-orange-200'} group hover:scale-105 transition-transform duration-300`}>
                    <p className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-orange-300' : 'text-orange-700'}`}>Used</p>
                    <p className={`text-3xl font-bold ${isDarkMode ? 'text-orange-200' : 'text-orange-800'}`}>{tickets.filter(t => t.isUsed).length}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className={`${isDarkMode ? 'backdrop-blur-md bg-gray-800/50 border-gray-700/50' : 'backdrop-blur-md bg-white/70 border-gray-200/50'} rounded-3xl shadow-2xl p-8 mb-8 border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
              <div className="flex justify-between items-center mb-8">
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Your Tickets</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search tickets..." 
                    className={`pl-12 pr-6 py-4 rounded-2xl border-2 focus:outline-none focus:ring-4 focus:ring-primary-500/20 focus:border-transparent transition-all text-lg ${
                      isDarkMode 
                        ? 'bg-gray-700/50 border-gray-600/50 text-white placeholder-gray-400 backdrop-blur-md' 
                        : 'bg-white/50 border-gray-300/50 text-gray-900 placeholder-gray-500 backdrop-blur-md'
                    }`}
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 absolute left-4 top-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-max">
                {filteredTickets.map(ticket => (
                  <TicketCard 
                    key={ticket.id} 
                    ticket={ticket} 
                    onToggleUsed={handleToggleUsed}
                    isDarkMode={isDarkMode}
                  />
                ))}
              </div>
              
              {filteredTickets.length === 0 && (
                <div className="text-center py-16">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-20 w-20 mx-auto mb-6 ${isDarkMode ? 'text-gray-600' : 'text-gray-300'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>No tickets found</h3>
                  <p className={`mb-6 text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Try changing your filter criteria</p>
                  <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all">
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <footer className={`${isDarkMode ? 'backdrop-blur-md bg-gray-800/50 border-gray-700/50' : 'backdrop-blur-md bg-white/70 border-gray-200/50'} py-8 border-t ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'} relative z-10`}>
        <div className="container mx-auto px-6 text-center">
          <span className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            &copy; {new Date().getFullYear()} TiketQ - Your Digital Ticket Collection
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App
