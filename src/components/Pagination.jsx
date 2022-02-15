import React from "react";
import styled from "styled-components";

export const Pagination = ({ benefitPerPage, totalBenefits, paginate }) => {
  const pageNumbers = [];
  for (
    let index = 1;
    index <= Math.ceil(totalBenefits / benefitPerPage);
    index++
  ) {
    pageNumbers.push(index);
  }

  return (
    <div>
      <PaginationNav>
        <ul>
          {console.log(benefitPerPage)}
          {pageNumbers?.map((number) => (
            <li key={number}>
              <a onClick={() => paginate(number)} to="!#">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </PaginationNav>
    </div>
  );
};

const PaginationNav = styled.nav`
  margin: 1rem 0;

  ul {
    list-style-type: none;
    justify-content: flex-start;
    align-items: center;
    display: flex;
  }

  li {
    margin: 0.4rem;
  }
  a {
    width: 30px;
    height: 30px;
    display: flex;
    color: #55608f;
    justify-content: center;
    align-items: center;
    outline: 1px solid #55608f;
    cursor: pointer;
    border-radius: 50%;
    font-size: 0.85rem;
    &:hover {
      color: white;
      background-color: #55608f;
    }
  }

  @media only screen and (max-width: 768px) {
    // a {
    //   padding: 0.5rem;
    // }
  }
`;
