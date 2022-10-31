import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  body: {
    '-webkit-font-smoothing': 'antialised',
    color: '$gray100',
    backgroundColor: '$gray900',
    overflowX: 'hidden',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400
  },

  '::-webkit-scrollbar': {
    width: 5,
    height: 5
  },

  '::-webkit-scrollbar-track': {
    background: 'transparent'
  },

  '::-webkit-scrollbar-thumb': {
    background: 'rgb(200, 200, 210)',
    borderRadius: 5
  },

  '::-webkit-scrollbar-thumb:hover': {
    background: 'rgb(165, 165, 175)'
  }
})