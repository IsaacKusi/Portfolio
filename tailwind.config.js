/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        }
       },
       animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
       }
    },
    container: {
      center: true,
      padding: '1rem',
      maxWidth: '800px',
    },
  },
  plugins: [],
}

