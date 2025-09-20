# Probabit - Prediction Markets Platform

A modern, ultra-sleek prediction markets platform built with React, featuring glassmorphism design and billion-dollar quality UI/UX.

## Features

- **Ultra-Sleek UI**: Glassmorphism design with pitch black backgrounds and green accents
- **Modern Trading Interface**: CEX-style trading page with real-time charts
- **Market Creation**: Easy-to-use market creation with category selection
- **User Profiles**: Comprehensive user profiles with performance analytics
- **Responsive Design**: Optimized for all screen sizes
- **Smooth Animations**: Framer Motion powered animations for premium feel

## Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React, Tabler Icons
- **Routing**: React Router DOM

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/blazeoffc/tefykp.git
cd tefykp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Deployment

### Vercel (Frontend)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

Or connect your GitHub repository directly on [Vercel](https://vercel.com)

### Render (Backend)

For backend deployment on Render, you'll need to:

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set build command: `npm install && npm run build`
4. Set start command: `npm start`

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar
│   ├── Sidebar.jsx         # Sidebar navigation
│   └── SharedBackground.jsx # Background component
├── pages/
│   ├── Markets.jsx         # Markets listing page
│   ├── Trading.jsx         # Trading interface
│   ├── CreateMarket.jsx    # Market creation
│   └── Profile.jsx         # User profile
└── App.jsx                 # Main app component
```

## Design System

- **Primary Color**: #10b981 (Emerald)
- **Background**: rgba(0, 0, 0, 0.85) (Pitch black glassmorphism)
- **Typography**: Inter font family
- **Effects**: Backdrop blur, gradient overlays, subtle shadows

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.