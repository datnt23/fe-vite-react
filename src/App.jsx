import { useState } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";

function App() {
  return (
    <ReduxProvider store={store}>
      <Header />
    </ReduxProvider>
  );
}

export default App;
