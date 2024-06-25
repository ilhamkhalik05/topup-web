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
        slideDown: {
          '0%': { maxHeight: '0', opacity: '0' },
          '100%': { maxHeight: '1000px', opacity: '1' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.5s forwards',
        slideOut: 'slideOut 0.5s forwards',
        slideDown: 'slideDown 1s ease-out forwards',
      },
      container: {
        center: true,
      },
      backgroundImage: {
        'auth-img': "url('/src/assets/webp/auth-img.webp')",
        'card': "url('/src/assets/webp/card.webp')",
        'card-product': "linear-gradient(105deg, rgba(20,20,20,1) 41%, rgba(45,45,45,1) 100%)",
        'wavy-footer': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDQwIDMyMCI+PHBhdGggZmlsbD0iIzAwOTlmZiIgZmlsbC1vcGFjaXR5PSIxIiBkPSJNM')",
        'root': "linear-gradient(105deg, rgba(3,3,3,1) 10%, rgba(47,47,47,1) 100%);",
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