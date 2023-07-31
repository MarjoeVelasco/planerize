import { chakra } from '@chakra-ui/react';

export const Logo = ({width, height, ...props}) => (
  <chakra.svg
    width={width} // Set the desired width
    height={height} // Set the desired height
    viewBox="0 0 132 119"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect y="59.397" width="84" height="84" rx="14" transform="rotate(-45 0 59.397)" fill="#4977BC" />
    <rect
      x="37.7358"
      y="49.4976"
      width="70"
      height="18"
      rx="7"
      transform="rotate(-45 37.7358 49.4976)"
      fill="#58C1A8"
    />
    <rect
      x="69.7358"
      y="59.4976"
      width="70"
      height="18"
      rx="7"
      transform="rotate(-45 69.7358 59.4976)"
      fill="#DFBF4F"
    />
  </chakra.svg>
);
