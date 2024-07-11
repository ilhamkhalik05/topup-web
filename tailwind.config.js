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
        "primary": "rgb(253 224 71)",
        "primary-light": "rgb(252, 233, 106)",
        "primary-dark": "rgb(159 88 10)",
        "accent": "rgb(96 165 250)",
        "light-ui": "rgb(255, 255, 255)",
        "light-ui-2": "rgb(212 212 216)",
        "dark-ui": "rgb(9, 9, 1)",
        "dark-ui-2": "rgb(39 39 42)",
        "dark-ui-3": "rgb(82 82 91)",
        "secondary-ui": "rgb(113, 113 , 122)",
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
        dropdown: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.5s forwards',
        slideOut: 'slideOut 0.5s forwards',
        slideDown: 'slideDown 1s ease-out forwards',
        dropdown: 'dropdown 0.2s ease-out forwards',
      },
      container: {
        center: true,
      },
      backgroundImage: {
        'root-dark': "linear-gradient(105deg, rgba(10, 10, 10, 1) 20%, rgba(23, 23, 23, 1) 100%);",
        'root-light': "linear-gradient(105deg, rgba(248, 251, 255, 1) 20%, rgba(220, 222, 235, 1) 100%);",
        'auth-img': "url('/src/assets/webp/auth-img.webp')",
        'card': "url('/src/assets/webp/card.webp')",
        'card-product': "linear-gradient(105deg, rgba(20,20,20,1) 41%, rgba(45,45,45,1) 100%)",
        'wavy-footer': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDQwIDMyMCI+PHBhdGggZmlsbD0iIzAwOTlmZiIgZmlsbC1vcGFjaXR5PSIxIiBkPSJNM')",
      },
      ringWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin')
  ],
}