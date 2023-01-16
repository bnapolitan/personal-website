
// 1. import `extendTheme` function
import { Input, ThemeConfig } from '@chakra-ui/react';

// 2. Add your color mode config
export const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}
Input.defaultProps = { ...Input.defaultProps, focusBorderColor: "", bgColor: "gray.200" }

// const themeObject = {
//   components: {
//     Input: {
//       defaultProps: {
//         focusBorderColor: "white"
//       }
//     }
//   }
// }

// 3. extend the theme
// export const theme = extendTheme({ themeObject })
