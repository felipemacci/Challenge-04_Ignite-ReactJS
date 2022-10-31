import { styled } from "../../styles";
import * as Dialog from "@radix-ui/react-dialog";

export const CartContainer = styled(Dialog.Content, {
  width: '30rem',
  height: '100vh',
  position: 'fixed',
  top: 0,
  right: 0,
  background: '$gray800',
  boxShadow: '0 3px 16px 0 rgba(0,0,0,0.9)',

  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '1.5rem'
  },

  '.list': {
    padding: '0 3rem',

    h3: {
      fontSize: '1.25rem'
    },

    ul: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      height: '25rem',
      listStyle: 'none',
      overflowY: 'scroll'
    },

    'ul, p': { marginTop: '2rem' }
  },

  footer: {
    width: '100%',
    padding: '3rem',
    position: 'absolute',
    bottom: 0,
    left: 0,

    table: {
      width: '100%',
      lineHeight: 1.6,
      fontSize: '$md',

      'tr:last-of-type td': {
        fontWeight: 'bold',
      },

      'tr:last-of-type td:last-of-type': {
        fontSize: '$xl'
      },

      'td:nth-child(even)': {
        textAlign: 'right'
      }
    },

    button: {
      width: '100%',
      marginTop: '3.5rem',
      padding: '1.25rem',
      lineHeight: 1.6,
      fontSize: '$md',
      fontWeight: 'bold',
      color: '$white',
      background: '$green500',
      border: 'none',
      borderRadius: 8,
      cursor: 'pointer',

      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed'
      },

      '&:not(:disabled):hover': {
        background: '$green300'
      }
    }
  }
})

export const CartCloser = styled(Dialog.Close, {
  background: 'none',
  border: 'none',
  cursor: 'pointer',

  svg: {
    color: '$gray500'
  },

  '&:hover svg': {
    color: '$gray300'
  }
})