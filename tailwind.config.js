module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EDE8F5',
          100: '#EDE8F5',
          200: '#ADBBDA',
          300: '#8697C4',
          400: '#7091E6',
          500: '#3052A0',
          DEFAULT: '#3052A0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Clash Display', 'sans-serif'],
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'float-delay': 'float-delay 10s ease-in-out infinite 2s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        'float-delay': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-25px) rotate(-2deg)' },
        },
      },
    },
  },
  plugins: [],
}