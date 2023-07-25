import React from "react";
import Title from "../../ui/title/title";
import Button from "../../ui/button/button";
import "./style.css";
import AdvantagesCard from "../../ui/advantages-card/advantages-card";
import list from "../../../mocks/list";

function AdvantagesList() {
  return list && list.length ? (
    <section className="advantages">
      <Title >Почему фермерские продукты лучше?</Title>
      <ul className="advantages__list">
        {list.map((li) => (
          <li className="advantages__item" key="{li.id}">
            <AdvantagesCard
              title={li.title}
              owner={li.owner}
              isNegative={li.isNegative}
              image={li.image}
              about={li.about} />
          </li>
        ))}
      </ul>
      <Button>Купить</Button>
    </section>
  ) : null;
}

export default AdvantagesList;
