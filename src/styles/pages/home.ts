import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  minHeight: 656,
  marginLeft: 'auto',
})

export const Product = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 540,
  position: 'relative',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  overflow: 'hidden',
  cursor: 'pointer',

  img: {
    objectFit: 'cover'
  },

  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem',
    position: 'absolute',
    right: '0.25rem',
    bottom: '0.25rem',
    left: '0.25rem',
    transform: 'translateY(110%)',
    opacity: 0,
    background: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 6,
    transition: '0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
      color: '$gray100'
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300'
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0)',
      opacity: 1
    }
  }
})