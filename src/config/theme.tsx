import { extendTheme } from '@chakra-ui/react'
import '@fontsource/roboto'

const theme = extendTheme({
    colors: {
        darkMode: {
            text: '#f7f0f5',
            background: '#433633',
            primary: '#8f857d',
            secondary: '#5c5552',
            accent: '#ad804f',
        },
        lightMode: {
            text: '#433633',
            background: '#f7f0f5',
            primary: '#8f857d',
            secondary: '#fdfcfc',
            accent: '#ad804f',
        },
    },
    fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
    },
    fontWeights: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
    },
    fonts: {
        heading: `'Roboto', sans-serif`,
        body: `'Roboto', sans-serif`,
    },
})

export default theme
