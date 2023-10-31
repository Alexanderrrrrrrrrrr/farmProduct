import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import Button from "../../ui/button/button";
import { Advantages, AdvantagesLists, AdvantagesItem } from "./style";
import AdvantagesCard from "../../ui/advantages-card/advantages-card";
import list from "../../../mocks/list";
import { AppRoute } from "../../../const";

function AdvantagesList({level}) {
  return list && list.length ? (
    <Advantages >
      <Title level={level} size={TitleSize.BIG}>Почему фермерские продукты лучше?</Title>
      <AdvantagesLists>
        {list.map((li) => (
          <AdvantagesItem key="{li.id}">
            <AdvantagesCard
              title={li.title}
              owner={li.owner}
              isNegative={li.isNegative}
              image={li.image}
              about={li.about} />
          </AdvantagesItem>
        ))}
      </AdvantagesLists>
      <Button minWidth={353} link={AppRoute.ORDER}>Купить</Button>
    </Advantages>
  ) : null;
}

export default AdvantagesList;
