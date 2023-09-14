export const colorToken = {
  grey: {
    0: '#ffffff', // manually adjusted
    10: '#f6f6f6', // manually adjusted
    50: '#f0f0f0', // manually adjusted
    100: '#e0e0e0',
    200: '#c2c2c2',
    300: '#a3a3a3',
    400: '#858585',
    500: '#666666',
    600: '#525252',
    700: '#3d3d3d',
    800: '#292929',
    900: '#141414',
    1000: '#000000', // manually adjusted
  },
  primary: {
    // blue
    100: '#d3d7dd',
    200: '#a6aebb',
    300: '#7a8699',
    400: '#4d5d77',
    500: '#213555',
    600: '#1a2a44',
    700: '#142033',
    800: '#0d1522',
    900: '#070b11',
  },
};

export const themeSetting = () => {
  return {
    palette: {
      primary: {
        ...colorToken.primary,
        main: colorToken.primary[500],
        dark: colorToken.primary[400],
        light: colorToken.primary[400],
        contrastText: '#fff',
      },
      background: {
        default: colorToken.grey[0],
        alt: colorToken.grey[50],
      },
      grey: {
        ...colorToken.grey,
      },
    },
    typography: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 14,
      h1: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 40,
      },
      h2: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 32,
      },
      h3: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 24,
      },
      h4: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 20,
      },
      h5: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 16,
      },
      h6: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 14,
      },
    },
  };
};
