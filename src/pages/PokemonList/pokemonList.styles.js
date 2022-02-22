import styled from "styled-components";

const media = {
  tablet: "@media(max-width: 1000px)",
  mobile: "@media(max-width: 700px)",
};

export const ListStyled = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);

  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
