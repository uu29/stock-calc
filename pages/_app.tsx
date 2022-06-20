import "styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "store";
import { ThemeProvider } from "styled-components";
import globalTheme from "styles/global-theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={globalTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
