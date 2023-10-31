import React from "react";
import Title, { TitleSize } from "../../../components/ui/title/title";
import {StyledSection, StaledWrapper, Text} from  "./styles.js";

function About({ level }) {
    return (
        <StyledSection >
            <StaledWrapper >
                <Title level={level} size={TitleSize.BIG}>Магазин фермерских продуктов с доставкой</Title>
                <Text >
                    Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.
                </Text>
            </StaledWrapper>
        </StyledSection>
    );
}

export default About;