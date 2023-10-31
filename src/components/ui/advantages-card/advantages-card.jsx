import React from "react";
import Title, { TitleSize } from "../title/title";
import { Feature, Image, Owner, Header, Text } from "./styles";

function AdvantagesCard({ title, owner, about, isNegative, image }) {
  return (
    <Feature isNegative={isNegative}>
      <Header >
        <Image
          className="advantage__img"
          width={56}
          height={56}
          src={image}
          alt={title}
        />
        <div>
        <Owner isNegative={isNegative}>{owner}</Owner>
          <Title size={TitleSize.SMALL}>{title}</Title>
        </div>
      </Header>
      <Text
        dangerouslySetInnerHTML={{ __html: about }}
      />
    </Feature>
  );
}

export default AdvantagesCard;