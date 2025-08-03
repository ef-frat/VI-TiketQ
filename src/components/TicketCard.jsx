import { useState } from 'react';
import { 
  formatDateTime, 
  formatDay, 
  formatMonth, 
  getLocationColor, 
  generateTicketPattern 
} from '../utils/ticketUtils.jsx';
import {
  getCardContainerClasses,
  getHoverGlowClasses,
  getBorderGlowClasses,
  getFlipContainerClasses,
  getCardSideClasses,
  getDateBadgeClasses,
  getStatusBadgeClasses,
  getButtonClasses,
  getTextClasses,
  getQRContainerClasses,
  getDetailsContainerClasses
} from '../utils/classNameHelpers.jsx';
import {
  CalendarIcon,
  LocationIcon,
  InfoIcon,
  CloseIcon,
  QRCodeIcon
} from './icons/index.jsx';

const TicketCard = ({ ticket, onToggleUsed, isDarkMode }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const ticketPattern = generateTicketPattern(ticket.location);

  return (
    <div 
      className={getCardContainerClasses(isDarkMode, ticket.isUsed, isFlipped)}
      style={{ 
        height: isFlipped ? '680px' : '380px',
        transition: 'all 0.7s ease-in-out'
      }}
      onClick={handleFlip}
    >
      {/* Enhanced hover glow effect */}
      <div className={getHoverGlowClasses(isDarkMode)}></div>
      
      {/* Subtle border glow on hover */}
      <div className={getBorderGlowClasses(isDarkMode)}></div>
      
      <div 
        className={getFlipContainerClasses(isFlipped)}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of ticket */}
        <div 
          className={getCardSideClasses(isDarkMode, 'rotate-y-0')}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative h-full">
            {/* Location color bar */}
            <div className={`h-3 rounded-t-3xl ${getLocationColor(ticket.location)}`}></div>
            
            {/* Date badge */}
            <div className={getDateBadgeClasses(isDarkMode)}>
              <span className={getTextClasses(isDarkMode, 'label')}>{formatMonth(ticket.time)}</span>
              <span className={getTextClasses(isDarkMode, 'title')}>{formatDay(ticket.time)}</span>
            </div>
            
            {/* Pattern background */}
            <div 
              className="absolute inset-0 opacity-31" 
              style={{ backgroundImage: ticketPattern }}
            ></div>
            
            {/* Content */}
            <div className="p-8 relative">
              <div className="flex justify-between items-start mb-6 pr-20">
                <h3 className={getTextClasses(isDarkMode, 'title')}>{ticket.eventName}</h3>
              </div>
              
              <div className="mb-8">
                <div className={`flex items-center mb-4 ${getTextClasses(isDarkMode, 'body')}`}>
                  <CalendarIcon className="h-5 w-5 mr-3 text-primary-500" />
                  <span>{formatDateTime(ticket.time)}</span>
                </div>
                <div className={`flex items-center mb-4 ${getTextClasses(isDarkMode, 'body')}`}>
                  <LocationIcon className="h-5 w-5 mr-3 text-primary-500" />
                  <span>{ticket.location}</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-6 mt-8 pb-6">
                <div className="flex items-center justify-between">
                  <span className={getStatusBadgeClasses(isDarkMode, ticket.isUsed)}>
                    {ticket.isUsed ? 'Used' : 'Available'}
                  </span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFlip();
                    }}
                    className={getButtonClasses(isDarkMode, ticket.isUsed, 'icon')}
                    aria-label="View ticket details"
                  >
                    <InfoIcon />
                  </button>
                </div>
                <div className="flex justify-center">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleUsed(ticket.id);
                    }}
                    className={getButtonClasses(isDarkMode, ticket.isUsed, 'primary')}
                  >
                    {ticket.isUsed ? 'Mark as Unused' : 'Mark as Used'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back of ticket */}
        <div 
          className={getCardSideClasses(isDarkMode, 'rotate-y-180')}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="p-8 h-full">
            <div className="flex justify-between items-start mb-8">
              <h3 className={getTextClasses(isDarkMode, 'title')}>Ticket Details</h3>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleFlip();
                }}
                className={getButtonClasses(isDarkMode, ticket.isUsed, 'icon')}
                aria-label="Close ticket details"
              >
                <CloseIcon />
              </button>
            </div>
            
            <div className={getDetailsContainerClasses(isDarkMode)}>
              <div className="flex justify-between mb-4">
                <span className={getTextClasses(isDarkMode, 'label')}>Ticket ID:</span>
                <span className={getTextClasses(isDarkMode, 'value')}>#{ticket.id.toString().padStart(8, '0')}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className={getTextClasses(isDarkMode, 'label')}>Event:</span>
                <span className={getTextClasses(isDarkMode, 'value')}>{ticket.eventName}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className={getTextClasses(isDarkMode, 'label')}>Location:</span>
                <span className={getTextClasses(isDarkMode, 'value')}>{ticket.location}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className={getTextClasses(isDarkMode, 'label')}>Date & Time:</span>
                <span className={getTextClasses(isDarkMode, 'value')}>{formatDateTime(ticket.time)}</span>
              </div>
              <div className="flex justify-between">
                <span className={getTextClasses(isDarkMode, 'label')}>Status:</span>
                <span className={`text-sm font-bold ${ticket.isUsed ? (isDarkMode ? 'text-gray-400' : 'text-gray-500') : 'text-green-600'}`}>
                  {ticket.isUsed ? 'Used' : 'Valid'}
                </span>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center mt-8 mb-8">
              <div className={getQRContainerClasses(isDarkMode)}>
                <QRCodeIcon className={`h-36 w-36 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
              </div>
              <p className={`text-base text-center font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Scan this QR code for entry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;