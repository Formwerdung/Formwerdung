const merge = require('lodash').merge
const defaultTheme = require('tailwindcss/defaultTheme')

const leadingBase = 1.5
const rhythmUnit = 0.75

const multiply = (i = 1) => `${i * rhythmUnit}rem`

const verticalRhythms = {
  m3x: `-${3 * rhythmUnit}rem`,
  half: `${rhythmUnit / 2}rem`,
  '1x': `${rhythmUnit}rem`,
  '2x': `${2 * rhythmUnit}rem`,
  '3x': `${3 * rhythmUnit}rem`,
  '4x': `${4 * rhythmUnit}rem`,
  '6x': `${6 * rhythmUnit}rem`,
  '8x': `${8 * rhythmUnit}rem`,
  '10x': `${10 * rhythmUnit}rem`,
  '12x': `${12 * rhythmUnit}rem`,
  '16x': `${16 * rhythmUnit}rem`,
  '20x': `${20 * rhythmUnit}rem`,
  '36x': `${36 * rhythmUnit}rem`,
}

const gridContainers = {
  md: '768px',
  lg: '1024px',
  xl: '1310px',
}

console.log(defaultTheme)

module.exports = {
  important: true,
  theme: {
    colors: merge(defaultTheme.colors, {
      black: '#080401',
      white: '#fffefc',
      blue: '#1565c0', // '#1e456e'
      'blue-dark': '#11519a',
      green: '#3cec96',
      red: '#e2252a',

      // separators
      'grey-light': '#dae4e9',

      // form borders
      'border-light': 'rgba(8,4,1,.2)',
      // hover
      border: 'rgba(2,1,0,.36)',

      'black-transparent': 'rgba(0, 0, 0, .6)',

      // form fill
      'off-white': '#fafaf9',

      grey: '#9babb4',
      'grey-lighter': '#f3f7f9',

      'my-custom-color': '#D4AF37',

      transparent: 'transparent',

      'grey-darkest': '#364349',
      'grey-darker': '#596a73',
      'grey-dark': '#70818a',

      'grey-lightest': '#fafcfc',
    }),
    fontSize: {
      xs: '.75rem', // 12px
      sm: '.875rem', // 14px
      md: '1rem',
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      base: '1em', // 16px
      baseMD: '1.15em',
      baseLG: '1.3em',
    },
    lineHeight: merge(verticalRhythms, {
      none: 1,
      tight: 1.25,
      normal: leadingBase,
      loose: 2,
    }),
    letterSpacing: {
      tight: '-0.05em',
      normal: '0',
      wide: '0.05em',
    },
    borderWidths: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px',
    },
    width: merge(gridContainers, verticalRhythms, {
      auto: 'auto',
      px: '1px',
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.66667%',
      '5/6': '83.33333%',
      full: '100%',
      screen: '100vw',
    }),
    height: {
      m3x: `-${3 * rhythmUnit}rem`,
      half: `${rhythmUnit / 2}rem`,
      '1x': `${rhythmUnit}rem`,
      '2x': `${2 * rhythmUnit}rem`,
      '3x': `${3 * rhythmUnit}rem`,
      '4x': `${4 * rhythmUnit}rem`,
      '5x': `${5 * rhythmUnit}rem`,
      '6x': `${6 * rhythmUnit}rem`,
      '7x': `${7 * rhythmUnit}rem`,
      '8x': `${8 * rhythmUnit}rem`,
      '10x': `${10 * rhythmUnit}rem`,
      '12x': `${12 * rhythmUnit}rem`,
      '16x': `${16 * rhythmUnit}rem`,
      '20x': `${20 * rhythmUnit}rem`,
      '36x': `${36 * rhythmUnit}rem`,
      auto: 'auto',
      px: '1px',
      full: '100%',
      screen: '100vh',
    },
    minWidth: {
      '0': '0',
      full: '100%',
    },
    minHeight: {
      '0': '0',
      full: '100%',
      screen: '100vh',
    },
    maxWidth: merge(gridContainers, {
      full: '100%',
      hack: '200px', // for broken logo link flex layout
      card: '320px',
      'card-2': '640px',
      'card-3': '960px',
      'card-4': '1280px',
      hero: '350px',
      'hero-md': '449px',
      contact: '35rem',
      tab: '74px',
      reset: 'none',
    }),
    maxHeight: {
      full: '100%',
      screen: '100vh',
    },
    padding: merge(verticalRhythms, {
      px: '1px',
      '0': '0',
      '1x': '0.75rem',
      '2x': '1.5rem',
      '3x': '2.25rem',
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '2rem',
      xl: '4rem',
    }),
    margin: merge(verticalRhythms, {
      auto: 'auto',
      px: '1px',
      '0': '0',
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '2rem',
      xl: '4rem',
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.66667%',
      '5/6': '83.33333%',
      '-px': '-1px',
      '-1': '-0.25rem',
      '-2': '-0.5rem',
      '-3': '-0.75rem',
      '-4': '-1rem',
      '-6': '-1.5rem',
      '-8': '-2rem',
    }),
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require('tailwindcss-transition')({
      standard: 'all .5s ease',
      transitions: {
        color: 'color .15s ease',
        slow: 'all 2s ease',
      },
    }),
  ],
}
