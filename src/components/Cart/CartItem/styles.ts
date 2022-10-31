import { styled } from "../../../styles";

export const CartItemContainer = styled('li', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',

  '.product-picture': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '6.25rem',
    height: '5.875rem',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,

    img: {
      objectFit: 'cover',
    }
  },

  p: {
    lineHeight: 1.6,
    fontSize: '$md',
    color: '$gray300'
  },

  strong: {
    lineHeight: 1.6,
    fontSize: '$md',
    color: '$gray100'
  },

  button: {
    display: 'block',
    marginTop: '0.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '$green500',
    background: 'none',
    border: 'none',
    cursor: 'pointer',

    '&:hover': {
      color: '$green300'
    }
  }
})

export const CartItemInfo = styled('div', {
  
})