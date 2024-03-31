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
          'black-radial-gradient': 'radial-gradient(farthest-corner at 10px 40px, #444, #000)',
        },
        'animation': {
            'screen-fade-out':'screen-fade-out 1s forwards',
            'wobble-motion':'rotate-wobble 0.75s ease 4',
            'gradient-x':'gradient-x 15s ease infinite',
            'gradient-y':'gradient-y 15s ease infinite',
            'gradient-xy':'gradient-xy 15s ease infinite',
        },
        'keyframes': {
            'rotate-wobble':{
                '0%, 50%, 100%': {
                  'rotate': '0deg'
                },
                '25%': {
                  'rotate': '30deg'
                },
                '75%': {
                  'rotate': '-30deg'
                }
            },
            'screen-fade-out':{
                '0%': {
                  'opacity':'1'
                },
                '25%': {
                    'opacity':'.25'
                },
                '50%, 100%':{
                    'opacity':'0'
                }
            },
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

