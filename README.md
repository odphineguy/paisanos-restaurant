# Paisanos Restaurant

A modern restaurant website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- Responsive design
- Modern UI with shadcn/ui components
- React Router for navigation
- TypeScript for type safety
- Tailwind CSS for styling

## Development

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/paisanos-restaurant.git
cd paisanos-restaurant
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`.

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

This project is configured for GitHub Pages deployment.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

### Automatic Deployment

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys to GitHub Pages when you push to the main branch.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Site header
│   ├── HeroSection.tsx # Hero section
│   ├── Footer.tsx      # Site footer
│   └── ...
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── assets/             # Static assets
├── App.tsx             # Main app component
└── main.tsx            # App entry point
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - UI component library
- **React Router** - Client-side routing
- **React Query** - Data fetching and caching

## License

This project is open source and available under the [MIT License](LICENSE).
