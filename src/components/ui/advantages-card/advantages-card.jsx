import React from "react";
import Title, { TitleSize } from "../title/title";
import "./style.css";

function AdvantagesCard({ title, owner, about, isNegative, image }) {
  return (
    <section className={`advantage${isNegative ? " advantage_negative" : ""}`}>
      <figure className="advantage__header">
        <img
          className="advantage__img"
          width={56}
          height={56}
          src={image}
          alt={title}
        />
        <div>
          <span
            className={`advantage__owner${
              isNegative ? " advantage__owner_negative" : ""
            }`}
          >
            {owner}
          </span>
          <Title size={TitleSize.SMALL}>{title}</Title>
        </div>
      </figure>
      <p
        className="advantage__text"
        dangerouslySetInnerHTML={{ __html: about }}
      />
    </section>
  );
}

export default AdvantagesCard;