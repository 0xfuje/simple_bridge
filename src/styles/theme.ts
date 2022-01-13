import { DefaultTheme } from "styled-components";

const customMediaQuery = (minWidth: number) => `@media (min-width: ${minWidth}px)`;

const theme = {
    colors: {
        light: '#F8F9FA',
        lightgrey: '#CED4DA',
        grey: '#495057',
        dark: '#212529'
    },
    font: {
        sizes: {
            small: '0.75em',
            regular: '1em',
            large: '2em'
        },
        weight: {
            regular: 400,
            bold: 700
        }
    },
    breakpoints: {
        mobile: customMediaQuery(480),
        desktop: customMediaQuery(770)
    },
    space: {
        tiny: '0.5em',
        small: '1em',
        normal: '1.5em',
        large: '2em'
    },
    input: {
        height: '2.5em',
        width: '10.5em'
    },
    container: {
        mobile: '300px',
        desktop: '500px'
    }
    
}

declare module 'styled-components' {
    type Theme = typeof theme;
    export interface DefaultTheme extends Theme {
        
    }
}

export default theme;