import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

import './App.css';
import MyComponent from './MyComponent';

const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={outerTheme}>
      <div className="App">
        <MyComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
