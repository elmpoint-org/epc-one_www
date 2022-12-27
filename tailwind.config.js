const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
      },
      boxShadow: {
        nav: '0px 2px 4px rgba(0, 0, 0, 0.21)',
      },
      colors: {
        'account-green': '#047857',
        'account-green-darker': '#046d4F',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
