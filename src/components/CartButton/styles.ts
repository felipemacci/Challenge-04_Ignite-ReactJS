import { styled } from "../../styles";

const cartItems = ['a', 'b', 'c', 'd']

export const CartButtonContainer = styled('button', {
  padding: '0.75rem',
  lineHeight: 0,
  border: 'none',
  borderRadius: 6,
  cursor: 'pointer',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed'
  },

  variants: {
    type: {
      header: {
        color: '$gray500',
        background: '$gray800',
        position: 'relative',

        '&:has(span)': {
          color: '$gray300'
        },

        svg: {
          width: '1.5rem',
          height: '1.5rem',
        },

        span: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '1.5rem',
          height: '1.5rem',
          position: 'absolute',
          top: '-0.5rem',
          right: '-0.5rem',
          fontSize: '$sm',
          color: '$white',
          background: '$green500',
          border: '3px solid $gray900',
          borderRadius: '50%'
        }
      },

      product: {
        color: '$white',
        background: '$green500',

        '&:not(:disabled):hover': {
          background: '$green300'
        },

        svg: {
          width: '2rem',
          height: '2rem',
        },

        span: {
          display: 'none'
        }
      }
    }
  },

  defaultVariants: {
    type: 'header'
  }
})

export const ItemsCounter = styled('span', {

})