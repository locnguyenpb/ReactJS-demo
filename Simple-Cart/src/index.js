import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import store from "./redux/store";

import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./i18next";
import "./index.css";

import ErrorBoundary from "./component/ErrorBoundary";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>Loading ~~~</div>}>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </Suspense>
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
);
