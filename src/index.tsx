import { render } from "react-dom";
import { Provider } from "react-redux";
import ReduxStore from "./store";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <Provider store={ReduxStore}>
    <ChakraProvider resetCSS>
      <Router>
        <App />
      </Router>
    </ChakraProvider>
  </Provider>,
  rootElement
);
