import "styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import globalTheme from "styles/global-theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={globalTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
