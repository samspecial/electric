import React from "react";
import {  SectionHeading } from "../Styles";
import styled from "styled-components";
import faqs from "../../data/faq";
import Faq from "./Faq";

const FaqList = () => {
    return (
        <Container>
            <SectionHeading>FAQ</SectionHeading>
            <>
                {faqs.map(faq => {
                    return <Faq key={faq.id} {...faq}/>
            })}
            </>
        </Container>
    )
}

export default FaqList;

const Container = styled.div`
width:40vw;
margin:0 auto;

@media (max-width:480px){
    width:100vw;
    padding:0 0.8rem;
}

`;