/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#0D0D0D",
        "light": "#F5F5F5",
        "primary": "#f97316",
        "secondPrimary": "#fa8f42",
        "accent": "#003566",
        "secondAccent": "#001d3d",
        "alterAccent": "#000814"
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.5s forwards',
        slideOut: 'slideOut 0.5s forwards',
      },
      container: {
        center: true,
      },
      backgroundImage: {
        'auth-img': "url('/src/assets/auth-img.webp')",
        'card': "url('/src/assets/card.webp')",
        'wavy-footer': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDQwIDMyMCI+PHBhdGggZmlsbD0iIzAwOTlmZiIgZmlsbC1vcGFjaXR5PSIxIiBkPSJNM')",
      },
      ringWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin')
  ],
}