import { styled } from "@stitches/react";
import { keyframes } from "../../../styles";

const skeletonAnimation = keyframes({
  "0%": {
    backgroundPosition: '-200px 0',
  },

  "100%": {
    backgroundPosition: 'calc(200px + 100%) 0',
  },
})

export const ProductSkeletonContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '43.5rem',
  height: '41rem',

  div: {
    backgroundColor: '$gray800',
    borderRadius: 8,
    backgroundImage: "linear-gradient(90deg, $gray800, $gray700, $gray800)",
    backgroundSize: "200px 100%",
    backgroundRepeat: "no-repeat",
    animation: `${skeletonAnimation} 1.3s ease-in-out infinite`,
  },

  '.main-rectangle': {
    width: '100%',
    height: '37.5rem',
  },

  footer: {
    display: 'flex',
    justifyContent: 'space-between',

    div: { height: '2rem' },

    '.info-rectangle': { width: '20.625rem' },
    '.cart-rectangle': { width: '6.25rem' }
  }
})