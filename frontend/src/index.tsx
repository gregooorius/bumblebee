import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Products } from "./Components/Products";
import { Provider } from "react-redux";
import { store } from "./store";
import { Basket } from "./Components/Basket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/login"} replace={true} />,
  },
  {
    path: "/login",
    element: <App />,
  },
  {
    path: "/termekek",
    element: <Products />,
  },
  {
    path: "/kosar",
    element: <Basket/>,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
