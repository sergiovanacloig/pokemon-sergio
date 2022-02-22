import styled from "styled-components";
import { defaultBorder } from "../../styles";

export const ContainerStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 0;
`;

export const CloseStyled = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
  position: absolute;
  right: 15px;
  top: 15px;
`;

export const ContentStyled = styled.article`
  background-color: white;
  padding: 20px;
  position: relative;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${defaultBorder}
`;

export const DescriptionStyled = styled.article`
  width: 100%;
  margin-bottom: 20px;
`;

export const ItemStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isList &&
    `
    display: block;

    li {
        text-transform: capitalize;
    }
  `}
`;

export const TitleStyled = styled.h4`
  font-weight: bold;
  margin: 10px 0;
`;

export const ValueStyled = styled.span`
  margin-left: 5px;
`;
