import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import "./style.css";
import list from "../../mocks/list";



 function App() {
  return <PageWrapper list={list} />;

}

export default App;