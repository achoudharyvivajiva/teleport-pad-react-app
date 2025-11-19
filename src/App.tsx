import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { PrimeReactProvider } from "primereact/api";
import { Toaster } from "react-hot-toast";

// import { ScreenOrientation } from "@capacitor/screen-orientation";
// import { KeepAwake } from "@capacitor-community/keep-awake";
// import { useEffect } from "react";

const App = () => {
  // useEffect(() => {
  //   const setupDevice = async () => {
  //     try {
  //       // Lock to landscape
  //       await ScreenOrientation.lock({ orientation: "landscape" });

  //       // Keep screen awake
  //       await KeepAwake.keepAwake();
  //       console.log("Screen will stay awake");
  //     } catch (err) {
  //       console.error("Setup error:", err);
  //     }
  //   };

  //   setupDevice();

  //   // return () => {
  //   //   // Optionally allow sleep when leaving the app
  //   //   KeepAwake.allowSleep();
  //   // };
  // }, []);
  return (
    <Provider store={store}>
      <PrimeReactProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Toaster />
          <AppRouter />
        </ThemeProvider>
      </PrimeReactProvider>
    </Provider>
  );
};

export default App;
