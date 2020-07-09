/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

const innerTheme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
});

const MyComponent = () => {
  return (
    <ThemeProvider theme={innerTheme}>
      <div>
        <Button>Default</Button>
        <Button
          css={css`
            background-color: #6772e5;
            color: #fff;
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
            padding: 7px 14px;
            &:hover {
              background-color: #5469d4;
            }
          `}
        >
          Customized
        </Button>
        <Button variant="contained" color={'primary'}>
          Themed
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default MyComponent;
