export const defaultColors = {
    blue: '#1919e6',
    red: '#e61919',
    yellow: '#e6e619',
    green: '#19e635',
    orange: '#ffa600',
    purple: '#9900ff',
    gray: '#808080',
}

const textVariants = {
    h1: '3.4rem',
    h2: '2.9rem',
    h3: '2.6rem',
    h4: '2.2rem',
    h5: '1.8rem',
    h6: '1.5rem',
    body1: '1.2rem',
    body2: '1.12rem',
    caption: '1rem'
}

const defaultBreakpoints = {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
};



const theme = {
    main: {
        primary: '#0175EA',
        secondary: '#9C27B0',
        onPrimary: '#FEFFFE',
        background: '#0B1829',
        onBackground: '#FEFFFE',
        onSecondary: '#FEFFFE',
        onError: '#FEFFFE',
        textPrimary: '#FEFFFE',
        ...defaultColors,
    },
    textVariants
};

export default theme;