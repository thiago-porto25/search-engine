/* eslint-disable indent */
import React from 'react';
import { PaletteMode } from '@mui/material';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    homeLogo: React.CSSProperties;
    pageLogo: React.CSSProperties;
    notFound: React.CSSProperties;
    text: React.CSSProperties;
    button: React.CSSProperties;
    title: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    homeLogo?: React.CSSProperties;
    pageLogo?: React.CSSProperties;
    notFound?: React.CSSProperties;
    text?: React.CSSProperties;
    button?: React.CSSProperties;
    title?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    homeLogo: true;
    pageLogo: true;
    notFound: true;
    text: true;
    button: true;
    title: true;
  }
}

const getDesignTokens: any = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: { main: '#67B7D1' },
          primaryLight: '#8AC7DB',
          primaryLighter: '#ADD8E6',
          secondary: { main: '#202124' },
          background: {
            page: '#ffffff',
            border: '#F9F9F9',
            search: '#ffffff',
          },
        }
      : {
          primary: { main: '#296E85' },
          primaryLight: '#338BA8',
          primaryLighter: '#43A6C6',
          secondary: { main: '#ffffff' },
          background: {
            page: '#202124',
            border: '#303134',
            search: '#212327',
          },
        }),
  },
  typography: {
    homeLogo: {
      fontSize: '72px',
      lineHeight: '125%',
      fontWeight: 'bold',
      fontFamily: 'Red Rose',
      '@media only screen and (max-width:900px)': {
        fontSize: '52px',
      },
    },
    pageLogo: {
      fontSize: '48px',
      lineHeight: '125%',
      fontWeight: 'bold',
      fontFamily: 'Red Rose',
      '@media only screen and (max-width:900px)': {
        fontSize: '36px',
      },
    },
    notFound: {
      fontSize: '96px',
      lineHeight: '125%',
      fontWeight: 'bold',
      fontFamily: 'Red Rose',
      '@media only screen and (max-width:900px)': {
        fontSize: '72px',
      },
    },
    text: {
      fontSize: '16px',
      lineHeight: '125%',
      fontWeight: 'normal',
      fontFamily: 'Roboto',
    },
    button: {
      fontSize: '24px',
      lineHeight: '125%',
      fontWeight: 'normal',
      fontFamily: 'Roboto',
      textTransform: 'none',
      '@media only screen and (max-width:900px)': {
        fontSize: '16px',
      },
    },
    title: {
      fontSize: '32px',
      lineHeight: '125%',
      fontWeight: 'bold',
      fontFamily: 'Roboto',
      '@media only screen and (max-width:900px)': {
        fontSize: '24px',
      },
    },
  },
});

export default getDesignTokens;
