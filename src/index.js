import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Store/Store.js";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
