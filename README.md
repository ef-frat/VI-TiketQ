# 🎫 TiketQ - Digital Ticket Collection Manager

A modern, responsive web application for managing your digital tickets and collectibles with a beautiful dark/light mode interface and 3D card animations.

![TiketQ Preview](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.0.6-purple?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎨 **Modern UI/UX**
- **Dark/Light Mode Toggle** - Seamless theme switching with persistent state
- **Glassmorphism Design** - Beautiful backdrop blur effects and transparency
- **3D Card Animations** - Interactive flip animations for ticket details
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Animated Gradient Borders** - Dynamic hover effects on cards and containers

### 🎫 **Ticket Management**
- **Digital Ticket Collection** - Store and manage all your digital tickets
- **Event Information** - Complete event details with date, time, and location
- **QR Code Generation** - Built-in QR codes for easy event entry
- **Status Tracking** - Mark tickets as used/unused with visual indicators
- **Smart Sorting** - Automatic sorting by closest event date

### 🔍 **Advanced Filtering**
- **Status Filters** - Filter by available, used, or all tickets
- **Location Filters** - Filter tickets by event location
- **Real-time Search** - Search functionality for quick ticket finding
- **Dynamic Stats** - Live statistics showing collection overview

### 🎯 **Interactive Elements**
- **3D Flip Cards** - Click to flip and view ticket details
- **Hover Effects** - Smooth animations and visual feedback
- **Gradient Animations** - Rotating gradient borders on hover
- **Smooth Transitions** - Fluid animations throughout the interface

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vi-tiketq
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
vi-tiketq/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Main header with dark mode toggle
│   │   ├── TicketCard.jsx          # Individual ticket card component
│   │   ├── TicketFilter.jsx        # Filtering and search component
│   │   └── icons/
│   │       └── index.jsx           # Reusable SVG icon components
│   ├── data/
│   │   └── tickets.js              # Sample ticket data
│   ├── utils/
│   │   ├── ticketUtils.jsx         # Ticket-related utility functions
│   │   └── classNameHelpers.jsx    # CSS class name generators
│   ├── App.jsx                     # Main application component
│   ├── main.jsx                    # Application entry point
│   ├── index.css                   # Global styles and animations
│   └── App.css                     # App-specific styles
├── package.json
├── tailwind.config.js              # Tailwind CSS configuration
├── vite.config.js                  # Vite build configuration
└── README.md                       # This file
```

## 🎨 Design System

### Color Palette
- **Primary Colors**: Blue, Purple, Pink gradients
- **Status Colors**: 
  - Available: Green
  - Used: Gray
  - Location-specific colors for different cities
- **Dark Mode**: Deep grays with transparency
- **Light Mode**: Clean whites with subtle shadows

### Typography
- **Headings**: Bold, large text for hierarchy
- **Body Text**: Medium weight for readability
- **Labels**: Small, medium weight for details
- **Responsive**: Scales appropriately across devices

### Animations
- **Card Flip**: 3D transform with preserve-3d
- **Hover Effects**: Scale, translate, and glow animations
- **Gradient Borders**: Rotating gradient animations
- **Transitions**: Smooth 300-700ms duration transitions

## 🔧 Technical Implementation

### Core Technologies
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **CSS Animations** - Custom keyframes and transforms

### Key Features Implementation

#### 3D Card Flip
```jsx
// Uses CSS transforms and preserve-3d
<div className="preserve-3d transition-transform duration-700">
  <div className="backface-visibility-hidden rotate-y-0">
    {/* Front content */}
  </div>
  <div className="backface-visibility-hidden rotate-y-180">
    {/* Back content */}
  </div>
</div>
```

#### Dark Mode Toggle
```jsx
// Persistent state with smooth transitions
const [isDarkMode, setIsDarkMode] = useState(true)
// Applied throughout components with conditional classes
```

#### Smart Sorting
```jsx
// Automatic date-based sorting
tickets.sort((a, b) => new Date(a.time) - new Date(b.time))
```

## 📊 Data Structure

### Ticket Object
```javascript
{
  "id": 1,
  "eventName": "DWP 2025",
  "location": "Jakarta",
  "time": "2025-08-31T20:00:00Z",
  "isUsed": false
}
```

### Supported Locations
- Jakarta, Belgium, Miami, Las Vegas
- California, Amsterdam, New York
- Netherlands, Budapest, Nevada

## 🎯 Usage Guide

### Adding Tickets
1. Click the "Add Ticket" button in the header
2. Fill in event details (name, location, date/time)
3. Save to add to your collection

### Managing Tickets
1. **View Details**: Click any ticket card to flip and see details
2. **Mark as Used**: Click "Mark as Used" button on the card
3. **Filter**: Use the filter panel to find specific tickets
4. **Search**: Use the search bar for quick finding

### Filtering Options
- **All Tickets**: View your complete collection
- **Available**: Show only unused tickets
- **Used**: Show only used tickets
- **By Location**: Filter by specific event locations

## 🎨 Customization

### Adding New Locations
1. Update `LOCATION_COLORS` in `src/utils/ticketUtils.jsx`
2. Add color mappings for new locations
3. Update the hex color values as needed

### Modifying Styles
1. Edit `src/utils/classNameHelpers.jsx` for component styles
2. Update `src/index.css` for global animations
3. Modify `tailwind.config.js` for theme customization

### Adding New Features
1. Create new components in `src/components/`
2. Add utility functions to `src/utils/`
3. Update the main App component as needed

## 🚀 Performance Optimizations

- **Code Splitting**: Components are modular and reusable
- **Efficient Rendering**: React hooks for optimal re-renders
- **CSS Optimizations**: Tailwind's purged CSS for minimal bundle size
- **Lazy Loading**: Ready for future lazy loading implementation

## 🐛 Troubleshooting

### Common Issues

**Port Already in Use**
```bash
# Kill existing process or use different port
npm run dev -- --port 3000
```

**Build Errors**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Styling Issues**
- Ensure Tailwind CSS is properly configured
- Check for conflicting CSS classes
- Verify dark mode state management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
