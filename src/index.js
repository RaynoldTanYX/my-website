import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Components/Root';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider , createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    type: "dark",
    common: {
      black: "#2E3440",
      white: "#ECEFF4",
    },
    primary: {
      main: "#8FBCBB",
    },
    secondary: {
      main: "#5E81AC",
    },
    text: {
      primary: "#ECEFF4",
    },
    background: {
      paper: "#3B4252",
      default: "#2E3440"
    },
  },

  // typography: {
  //   fontFamily
  // }
});
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Root/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
