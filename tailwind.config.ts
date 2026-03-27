import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Professional, deep color palette
        primary: {
          50: '#FDF8F0',
          100: '#F8EFE0',
          200: '#F0E0C0',
          300: '#E8D1A0',
          400: '#D8B870',
          500: '#C49A3F',  // Warm gold - main accent
          600: '#A67C2E',
          700: '#8A6324',
          800: '#6E4C1C',
          900: '#523814',
        },
        dark: {
          50: '#E8E9EA',
          100: '#C1C3C6',
          200: '#9A9DA2',
          300: '#73777E',
          400: '#4C515A',
          500: '#2C2F36',  // Main dark background
          600: '#23262B',
          700: '#1B1D21',
          800: '#121417',
          900: '#0A0B0D',
        },
        accent: {
          copper: '#B87333',
          burgundy: '#800020',
          olive: '#556B2F',
          slate: '#2F4F4F',
        },
      },
      fontFamily: {
        // Professional, business-friendly fonts
        heading: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'md': '0.375rem',  // Standard subtle rounding
        'lg': '0.5rem',
        'xl': '0.75rem',
      },
      letterSpacing: {
        tight: '-0.02em',
        wide: '0.02em',
        wider: '0.05em',
      },
    },
  },
  plugins: [],
}

export default config