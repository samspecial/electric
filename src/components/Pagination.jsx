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
    margin: 1rem;
  }
  a {
    padding: 1.25rem;
    color: #55608f;
    outline: 1px solid #55608f;
    cursor: pointer;
    &:hover {
      color: white;
      background-color: #55608f;
    }
  }
`;
