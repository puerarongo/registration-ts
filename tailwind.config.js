/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'item-shadow': '2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)',
      },
      lineHeight: {
        'main-text': '24px'
      },
      colors: {
        'header-link': 'rgba(56, 65, 93, 0.82)',
        'background-employment': 'rgba(161, 177, 219, 0.317343)',
        'border-employment': 'rgba(85, 105, 158, 0.3)',
        'background-benefits': 'rgba(255, 207, 0, 0.15)',
      },
    },
    fontSize: {
      notFound: '30px',
      title: '28px',
      subTitle: '20px',
      mainText: '18px'
    }
  },
  plugins: [],
}