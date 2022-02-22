import styled from "styled-components";
import { defaultBorder } from '../../styles';

export const ContainerStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: white;
  cursor: pointer;
  ${defaultBorder}

  &:hover {
    background-color: #d1d1d1;
  }
`;
