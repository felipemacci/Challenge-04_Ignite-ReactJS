import { styled } from "..";

export const HomeContainer = styled('main', {
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
})

export const SliderContainer = styled('div', {
  display: 'flex',
  margin: '0 auto',
  gap: '3rem',

  '.embla__slide': {
    minWidth: '43.5rem',
  },
})

export const Product = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minHeight: '41rem',
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
    padding: '1.25rem',
    position: 'absolute',
    right: '0.25rem',
    bottom: '0.25rem',
    left: '0.25rem',
    transform: 'translateY(110%)',
    opacity: 0,
    background: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 6,
    transition: '0.2s ease-in-out',

    div: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem',

      strong: {
        fontSize: '$lg',
        color: '$gray100'
      },
  
      span: {
        fontSize: '$xl',
        fontWeight: 'bold',
        color: '$green300'
      }
    }
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0)',
      opacity: 1
    }
  }
})