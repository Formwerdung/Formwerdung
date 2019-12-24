/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file. It's really just a big JavaScript object and
we've done our very best to explain each section.

View the full documentation at https://tailwindcss.com.

*/
const merge = require('lodash').merge

/*
|-------------------------------------------------------------------------------
| The default config
|-------------------------------------------------------------------------------
|
| This variable contains the default Tailwind config. You don't have
| to use it, but it can sometimes be helpful to have available. For
| example, you may choose to merge your custom configuration
| values with some of the Tailwind defaults.
|
*/
// const defaultConfig = require('tailwindcss/defaultConfig')();

// function lineHeightCorrection(fontSize = 1, lineHeight = 1.5) {
//   return ((fontSize * lineHeight) - fontSize) / 2;
// }

const leadingBase = 1.5
// const fontBase = 1;
const rhythmUnit = 0.75 // leadingBase / 2;

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

const colors = {
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

  'red-darkest': '#420806',
  'red-darker': '#6a1b19',
  'red-dark': '#cc1f1a',

  'red-light': '#ef5753',
  'red-lighter': '#f9acaa',
  'red-lightest': '#fcebea',

  'orange-darkest': '#542605',
  'orange-darker': '#7f4012',
  'orange-dark': '#de751f',
  orange: '#f6993f',
  'orange-light': '#faad63',
  'orange-lighter': '#fcd9b6',
  'orange-lightest': '#fff5eb',

  'yellow-darkest': '#453411',
  'yellow-darker': '#684f1d',
  'yellow-dark': '#f2d024',
  yellow: '#ffed4a',
  'yellow-light': '#fff382',
  'yellow-lighter': '#fff9c2',
  'yellow-lightest': '#fcfbeb',

  'green-darkest': '#032d19',
  'green-darker': '#0b4228',
  'green-dark': '#1f9d55',

  'green-light': '#51d88a',
  'green-lighter': '#a2f5bf',
  'green-lightest': '#e3fcec',

  'teal-darkest': '#0d3331',
  'teal-darker': '#174e4b',
  'teal-dark': '#38a89d',
  teal: '#4dc0b5',
  'teal-light': '#64d5ca',
  'teal-lighter': '#a0f0ed',
  'teal-lightest': '#e8fffe',

  'blue-darkest': '#05233b',
  'blue-darker': '#103d60',

  'blue-light': '#6cb2eb',
  'blue-lighter': '#bcdefa',
  'blue-lightest': '#eff8ff',

  'indigo-darkest': '#191e38',
  'indigo-darker': '#2f365f',
  'indigo-dark': '#5661b3',
  indigo: '#6574cd',
  'indigo-light': '#7886d7',
  'indigo-lighter': '#b2b7ff',
  'indigo-lightest': '#e6e8ff',

  'purple-darkest': '#1f133f',
  'purple-darker': '#352465',
  'purple-dark': '#794acf',
  purple: '#9561e2',
  'purple-light': '#a779e9',
  'purple-lighter': '#d6bbfc',
  'purple-lightest': '#f3ebff',

  'pink-darkest': '#45051e',
  'pink-darker': '#72173a',
  'pink-dark': '#eb5286',
  pink: '#f66d9b',
  'pink-light': '#fa7ea8',
  'pink-lighter': '#ffbbca',
  'pink-lightest': '#ffebef',
}

module.exports = {
  important: true,
  theme: {
    colors: colors,
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
    textColor: colors,
    backgroundColor: colors,
    borderWidths: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px',
    },
    borderColor: Object.assign({ default: colors['grey-light'] }, colors),
    borderRadius: {
      none: '0',
      sm: '.125rem',
      default: '.25rem',
      lg: '.5rem',
      full: '9999px',
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
      '6x': `${6 * rhythmUnit}rem`,
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
    boxShadow: {
      default: '0 2px 4px 0 rgba(0,0,0,0.10)',
      md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
      lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
      inner: 'inset 0 0px 6px 0 rgba(0,0,0,0.06)',
      none: 'none',
    },
    zIndex: {
      auto: 'auto',
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
    },
    opacity: {
      '0': '0',
      '25': '.25',
      '50': '.5',
      '75': '.75',
      '100': '1',
    },
    fill: {
      current: 'currentColor',
    },
    stroke: {
      current: 'currentColor',
    },
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
