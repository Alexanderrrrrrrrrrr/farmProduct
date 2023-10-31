import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import { GlobalStyle } from "./style";
import list from "../../mocks/list";
import products from "../../mocks/products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "../../const";
import Order from "../../components/pages/order/order";
import MainPage from "../pages/main-page/main-page";
import ScrollToTop from "../ui/scrollTop/scrollTop";


function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage list={list} />} />
            <Route
              path={AppRoute.ORDER.replace(AppRoute.MAIN, "")}
              element={<Order products={products} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

 