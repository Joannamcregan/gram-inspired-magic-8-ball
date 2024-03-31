/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/*.{html,js}',
  './index.html'],
  theme: {
    screens: {
      'xs580': '580px',
      'xs530': '530px',
      'xs480': '480px',
      'xs430': '430px',
      'xs380': '380px',
      'xs330': '330px',
      'xs280': '280px',
      ...defaultTheme.screens,
    },
    extend: {
        'width':{
          '128': '32rem',
          '7/10': '70%',
          'xs500': '500px',
          'xs450': '450px',
          'xs400': '400px',
          'xs350': '350px',
          'xs300': '300px',
          'xs250': '250px',
        },
        'height':{
          '128': '32rem',
          '7/10': '70%',
          'xs500': '500px',
          'xs450': '450px',
          'xs400': '400px',
          'xs350': '350px',
          'xs300': '300px',
          'xs250': '250px',
        },
        'backgroundImage':{
          'black-radial-gradient': 'radial-gradient(farthest-corner at 10px 40px, #333, #000)',
        },
        'animation': {
            'gradient-x':'gradient-x 15s ease infinite',
            'gradient-y':'gradient-y 15s ease infinite',
            'gradient-xy':'gradient-xy 15s ease infinite',
        },
        'keyframes': {
            'gradient-y': {
                '0%, 100%': {
                    'background-size':'400% 400%',
                    'background-position': 'center top'
                },
                '50%': {
                    'background-size':'200% 200%',
                    'background-position': 'center center'
                }
            },
            'gradient-x': {
                '0%, 100%': {
                    'background-size':'200% 200%',
                    'background-position': 'left center'
                },
                '50%': {
                    'background-size':'200% 200%',
                    'background-position': 'right center'
                }
            },
            'gradient-xy': {
                '0%, 100%': {
                    'background-size':'400% 400%',
                    'background-position': 'left center'
                },
                '50%': {
                    'background-size':'200% 200%',
                    'background-position': 'right center'
                }
            }
        }
    }
},
  plugins: [],
}

