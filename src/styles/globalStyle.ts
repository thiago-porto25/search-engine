const globalStyle = (theme: any) => ({
  body: {
    margin: '0',
    backgroundColor: theme.palette.background.page,
    color: theme.palette.secondary.main,
    fontFamily: "'Roboto', sans-serif",
    minHeight: '100vh',
  },
  '#root': {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column' as 'column',
  },
});

export default globalStyle;
