import React from "react";
import Pricing from "./Pricing"
import pricingData from "../../data/pricingData";
import { Panel } from "../WhyChooseUs/CardStyle";
import { BackgroundLight } from "../Styles";


const PricingList = () => {
    return (<BackgroundLight>
        <h2>Our Pricing </h2>
        <Panel>
        {pricingData.map((prices, index) => {
        return (<Pricing key={index} {...prices}/>)
        })}
            </Panel>
    </BackgroundLight>)
}

export default PricingList;