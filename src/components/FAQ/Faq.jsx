import React,{useState} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Faq = ({ title, body }) => {
    const [content, showContent] = useState(false);
    return (
        <Div>
            <h4 onClick={() => showContent(!content)}>{title}</h4>
            {content ? (<p>{ body}</p>):null}
            
    </Div>
    )
}

export default Faq;

Faq.propTypes = {
    title: PropTypes.string.isRequired,
    body:PropTypes.string.isRequired
}

const Div = styled.div`

h4{
    cursor:pointer;
    margin-bottom:0.6rem;
    
}
p{
    padding:20px;
    box-shadow:0px 4px 6px rgba(0,0,0,0.25),0px 4px 6px rgba(0,0,0,0.25),0px 4px 6px rgba(0,0,0,0.25);
    background:#d0021b;
    color:white;
    margin-bottom:0.75rem;
}

@media (max-width:480px){
    width:100%;

}
`;