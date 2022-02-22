import styled from "styled-components";
import { defaultBorder } from "../../styles";

export const ButtonStyled = styled.button`
  ${defaultBorder}
  padding: 5px 10px;
  cursor: pointer;

  ${(props) =>
    props.isFavourite &&
    `
      background-color: #e8c048;
      color: white;
    `}

    &:hover {
      filter: brightness(95%);
    }
`;
