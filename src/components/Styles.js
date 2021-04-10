import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled.button`
width:100px;
height:30px;
padding:5px 7px;
background-color:#34628C;
color:white;
font-size:12px;
border:none;
box-shadow: 4px 8px 8px grey, 2px 6px 6px #34628C;
border-radius:5px;
margin-top:20px;
margin-right: 15px;
opacity:0;
animation:fadeUp 0.2s ease-in-out 0.7s forwards;

:hover{
    background-color:white;
    color:#34628C;
}
@keyframes fadeUp{
    from{
        opacity:0;
        transform:translateY(20px)
    }
    to{
        opacity:1;
        transform:translateY(0)
    }
}

@media only screen and (min-width: 480px) and (max-width:768px){
        width:120px;
        font-size:16px;
        height:40px;
} 

@media only screen and (min-width:769px){
     width:auto;
     font-size:12px;
     font-weight:600;
     height:30px;
     padding:7px 10px;
}
`;

export const MenuListGroup = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content:flex-start;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #ccc;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(-100%)")};
    top: 0;
    right: 0;
    left:0;
    height: 100vh;
    width: 80%;
    margin-top: 60px;
    padding-left:1rem;
    transition: transform 0.3s ease-in-out;
  }
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  width: 30%;
  padding: 0.5rem 1.4rem;
  color: #880212;
  font-size: 0.85rem;
  cursor: pointer;
  text-align: center;
  font-weight:bold;

  &:hover {
    color: #0e121e;
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align:left;
  }
`;

export const Heading = styled.h2`
width:300px;
font-size:4rem;
font-weight:900;
color:#880212;
text-align:justify;
`;

export const Text = styled.p`
font-size:1rem;
color:#666;
line-height:1.75;
`;