// Helper functions for generating className strings
export const getCardContainerClasses = (isDarkMode, isUsed, isFlipped) => {
  const baseClasses = [
    'relative',
    'rounded-3xl',
    'shadow-2xl',
    'overflow-hidden',
    'transition-all',
    'duration-700',
    'hover:shadow-3xl',
    'perspective-1000',
    'cursor-pointer',
    'border-4',
    'group',
    'hover:scale-105',
    'hover:-translate-y-2',
    'transform',
    'duration-500',
    'ease-out'
  ];

  const backgroundClasses = isDarkMode 
    ? 'backdrop-blur-md bg-gray-800/50 border-gray-700/50'
    : 'backdrop-blur-md bg-white/70 border-gray-200/50';

  const opacityClass = isUsed ? 'opacity-80' : '';

  return `${backgroundClasses} ${baseClasses.join(' ')} ${opacityClass}`.trim();
};

export const getHoverGlowClasses = (isDarkMode) => {
  const baseClasses = [
    'absolute',
    'inset-0',
    'rounded-3xl',
    'opacity-0',
    'group-hover:opacity-100',
    'transition-opacity',
    'duration-500'
  ];

  const glowClasses = isDarkMode
    ? 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20'
    : 'bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20';

  return `${baseClasses.join(' ')} ${glowClasses}`;
};

export const getBorderGlowClasses = (isDarkMode) => {
  const baseClasses = [
    'absolute',
    'inset-0',
    'rounded-3xl',
    'opacity-0',
    'group-hover:opacity-100',
    'transition-opacity',
    'duration-500'
  ];

  const borderClasses = isDarkMode
    ? 'border-2 border-blue-400/30'
    : 'border-2 border-blue-300/30';

  return `${baseClasses.join(' ')} ${borderClasses}`;
};

export const getFlipContainerClasses = (isFlipped) => {
  const baseClasses = [
    'relative',
    'w-full',
    'h-full',
    'preserve-3d',
    'transition-transform',
    'duration-700'
  ];

  const rotationClass = isFlipped ? 'rotate-y-180' : 'rotate-y-0';

  return `${baseClasses.join(' ')} ${rotationClass}`;
};

export const getCardSideClasses = (isDarkMode, rotation = 'rotate-y-0') => {
  const baseClasses = [
    'absolute',
    'w-full',
    'h-full',
    'backface-visibility-hidden',
    'preserve-3d',
    'rounded-3xl'
  ];

  const backgroundClasses = isDarkMode
    ? 'backdrop-blur-md bg-gray-800/50'
    : 'backdrop-blur-md bg-white/70';

  return `${baseClasses.join(' ')} ${backgroundClasses} ${rotation}`;
};

export const getDateBadgeClasses = (isDarkMode) => {
  const baseClasses = [
    'absolute',
    'top-6',
    'right-6',
    'w-16',
    'h-16',
    'rounded-2xl',
    'flex',
    'flex-col',
    'items-center',
    'justify-center',
    'shadow-xl',
    'border-2'
  ];

  const backgroundClasses = isDarkMode
    ? 'backdrop-blur-md bg-gray-700/50 border-gray-600/50'
    : 'backdrop-blur-md bg-white/80 border-gray-200/50';

  return `${baseClasses.join(' ')} ${backgroundClasses}`;
};

export const getStatusBadgeClasses = (isDarkMode, isUsed) => {
  const baseClasses = [
    'px-4',
    'py-2',
    'text-sm',
    'font-bold',
    'rounded-full'
  ];

  let statusClasses;
  if (isUsed) {
    statusClasses = isDarkMode
      ? 'bg-gray-600/50 text-gray-300'
      : 'bg-gray-200 text-gray-600';
  } else {
    statusClasses = isDarkMode
      ? 'bg-green-800/50 text-green-200'
      : 'bg-green-100 text-green-800';
  }

  return `${baseClasses.join(' ')} ${statusClasses}`;
};

export const getButtonClasses = (isDarkMode, isUsed, variant = 'primary') => {
  const baseClasses = [
    'px-8',
    'py-4',
    'rounded-2xl',
    'text-sm',
    'font-bold',
    'whitespace-nowrap',
    'relative',
    'z-20',
    'transition-all',
    'hover:scale-105',
    'hover:shadow-xl',
    'transform',
    'duration-300',
    'ease-out'
  ];

  let buttonClasses;
  if (variant === 'primary') {
    if (isUsed) {
      buttonClasses = isDarkMode
        ? 'bg-primary-800/50 text-primary-200 hover:bg-primary-700/50 hover:shadow-primary-500/25'
        : 'bg-primary-100 text-primary-700 hover:bg-primary-200 hover:shadow-primary-500/25';
    } else {
      buttonClasses = 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 hover:shadow-primary-500/25';
    }
  } else if (variant === 'icon') {
    buttonClasses = 'p-3 rounded-2xl text-sm text-primary-500 hover:bg-primary-50 flex items-center justify-center relative z-20 transition-all hover:scale-110 hover:shadow-lg transform duration-300 ease-out';
  }

  return `${baseClasses.join(' ')} ${buttonClasses}`;
};

export const getTextClasses = (isDarkMode, variant = 'default') => {
  const baseClasses = ['text-lg', 'font-medium'];

  let textClasses;
  switch (variant) {
    case 'title':
      textClasses = isDarkMode ? 'text-white' : 'text-gray-900';
      return `text-2xl font-bold truncate ${textClasses}`;
    case 'body':
      textClasses = isDarkMode ? 'text-gray-300' : 'text-gray-600';
      return `${baseClasses.join(' ')} ${textClasses}`;
    case 'label':
      textClasses = isDarkMode ? 'text-gray-400' : 'text-gray-500';
      return `text-sm font-medium ${textClasses}`;
    case 'value':
      textClasses = isDarkMode ? 'text-gray-300' : 'text-gray-700';
      return `text-sm font-bold ${textClasses}`;
    default:
      textClasses = isDarkMode ? 'text-gray-300' : 'text-gray-600';
      return `${baseClasses.join(' ')} ${textClasses}`;
  }
};

export const getQRContainerClasses = (isDarkMode) => {
  const baseClasses = [
    'w-56',
    'h-56',
    'rounded-3xl',
    'flex',
    'items-center',
    'justify-center',
    'mb-6',
    'shadow-xl'
  ];

  const backgroundClasses = isDarkMode
    ? 'bg-gray-700/50'
    : 'bg-gray-100/50';

  return `${baseClasses.join(' ')} ${backgroundClasses}`;
};

export const getDetailsContainerClasses = (isDarkMode) => {
  const baseClasses = [
    'mb-8',
    'p-6',
    'rounded-2xl'
  ];

  const backgroundClasses = isDarkMode
    ? 'bg-gray-700/50'
    : 'bg-gray-50/50';

  return `${baseClasses.join(' ')} ${backgroundClasses}`;
}; 