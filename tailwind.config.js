module.exports = {
  darkMode: 'class', // This enables class-based dark mode
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        light: {
          bg: '#ffffff',
          text: '#000000',
          accent: '#3b82f6', // Blue-500
        },
        // Dark mode colors
        dark: {
          bg: '#121212',
          text: '#ffffff',
          accent: '#3b82f6', // Same accent for consistency
        }
      }
    },
  },
  plugins: [],
}
