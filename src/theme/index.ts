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
  secondary:{
    100: "#e8f5f8",
    200: "#d2ebf1",
    300: "#bbe1eb",
    400: "#a5d7e4",
    500: "#8ecddd",
    600: "#72a4b1",
    700: "#557b85",
    800: "#395258",
    900: "#1c292c"

  },
  yellow: {
    100: "#fff5e2",
    200: "#ffebc6",
    300: "#ffe0a9",
    400: "#ffd68d",
    500: "#ffcc70",
    600: "#cca35a",
    700: "#997a43",
    800: "#66522d",
    900: "#332916"
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
      secondary:{
        ...colorToken.secondary,
        main: colorToken.secondary[500],
        dark: colorToken.secondary[600],
        light: colorToken.secondary[300],
      },
      background: {
        default: colorToken.grey[0],
        alt: colorToken.grey[50],
      },
      neutral: {
        ...colorToken.grey,
      },
      yellow:{
        ...colorToken.yellow,
        main: colorToken.yellow[500]
      }
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


