import React from "react";
import About from "../../blocks/about/about";
import AdvantagesList from "../../blocks/advantages-list/advantages-list";




function MainPage({list}) {
  return (
    <>
      <About />
      <AdvantagesList list={list}  />
    </>
  );
}

export default MainPage;



