import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100'
  },

  p: {
    maxWidth: 560,
    marginTop: '3rem',
    lineHeight: 1.4,
    textAlign: 'center',
    fontSize: '$xl',
    color: '$gray300'
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    textDecoration: 'none',
    fontSize: '$lg',
    fontWeight: 'bold',
    color: '$green500',

    '&:hover': {
      color: '$green300'
    }
  }
})

export const ImageGrid = styled('div', {
  display: 'flex',

  "div + div": {
    marginLeft: "calc(-140px / 2)",
  }
})

export const ImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 140,
  height: 140,
  marginTop: '4rem',
  padding: '0.25rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '50%',
  boxShadow: '0 3px 16px 0 rgba(0,0,0,0.9)',

  img: {
    objectFit: 'cover'
  }
})