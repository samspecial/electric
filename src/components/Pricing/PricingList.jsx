import React from "react";
import Pricing from "./Pricing"
import pricingData from "../../data/pricingData";
import { Panel } from "../WhyChooseUs/CardStyle";
import { BackgroundLight, SectionHeading } from "../Styles";


const PricingList = () => {
    return (<BackgroundLight>
        <SectionHeading>Our Pricing</SectionHeading>
        <Panel>
        {pricingData.map((prices, index) => {
        return (<Pricing key={index} {...prices}/>)
        })}
            </Panel>
    </BackgroundLight>)
}

export default PricingList;