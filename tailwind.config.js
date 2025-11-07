/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        gold: '#C6A664',
        charcoal: '#121212',
        ash: '#F5F5F2',
        porcelain: '#FFFFFF',
        linen: '#FBF9F4',
        pearl: '#F4F0E9',
        mink: '#ECE7DD',
        stone: '#E2DCD1',
        slate: '#6B6B6B',
      },
      backgroundImage: {
        'hero-texture':
          "linear-gradient(120deg, rgba(15, 15, 15, 0.95), rgba(26, 26, 26, 0.75))",
        'divider-gold':
          'linear-gradient(90deg, rgba(198,166,100,0) 0%, rgba(198,166,100,0.65) 50%, rgba(198,166,100,0) 100%)',
      },
      boxShadow: {
        glow: '0 20px 45px -20px rgba(198, 166, 100, 0.55)',
      },
    },
  },
  plugins: [],
}
