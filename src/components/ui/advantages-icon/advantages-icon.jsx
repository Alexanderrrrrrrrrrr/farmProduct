import React from "react";
import {AdvantagesIcons} from "./style.css";

export const CardFeature = {
  Farm: "farm",
  Shop: "shop"
};

function AdvantagesIcon({ className = "", feature }) {
    let options;
  
    switch (feature) {
      case CardFeature.Farm:
        options = {
          text: "Фермерские продукты",
          bgColor: "#88AA4D"
        };
        break;
      case CardFeature.Shop:
        options = {
          text: "Магазинные продукты",
          bgColor: "#F75531"
        };
        break;
      default:
        options = {
          text: "",
          bgColor: "#000"
        };
        break;
    }
  
    return options.text ? (
      <AdvantagesIcons
        AdvantagesIcons={`advantages-icon ${className}`}
        style={{ backgroundColor: options.bgColor }}
      >
        {options.text}
      </AdvantagesIcons>
    ) : null;
  }
  
  export default AdvantagesIcon;