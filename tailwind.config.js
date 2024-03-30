/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,js}',
  './index.html'],
  theme: {
    extend: {
        'width':{
          '128': '32rem',
        },
        'height':{
          '128': '32rem',
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

