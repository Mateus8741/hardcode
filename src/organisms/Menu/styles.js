import styled from "styled-components";



export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemList = styled.li`
  display: inline-block;
  margin-right: 32px;
  font-weight: 500;

  &:hover {
    a {
      color: #E73634;
    }
  }

  a {
    color: #FFF;
    text-decoration: none;
    transition: color 0.25s ease;
    font-family: 'Montserrat', sans-serif;
  }
`;
