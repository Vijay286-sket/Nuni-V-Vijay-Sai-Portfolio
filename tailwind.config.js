/****/ export default /***/ {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        accent: {
          blue: '#22d3ee',
          green: '#22c55e',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(34,211,238,0.35)',
      },
      backgroundImage: {
        'grid-radial':
          'radial-gradient(circle at 50% 50%, rgba(34,211,238,0.15), transparent 35%), radial-gradient(ellipse at top, rgba(16,185,129,0.12), transparent 40%)',
      },
    },
  },
  plugins: [],
}
