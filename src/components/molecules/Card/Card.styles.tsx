import styled from "styled-components";
import { theme } from "config";

interface StyledContainerProps {
  hasTags?: string[];
}

export const Container = styled.article`
  background: rgba(45, 45, 45, 0.4);
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 40px;
  margin-bottom: 30px;
  position: relative;

  ${(props: StyledContainerProps) =>
    props.hasTags ? "margin-left: 40px;" : "margin-left: 0"}
`;

export const Header = styled.header`
  color: ${theme.pallet.WHITE};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.section`
  margin: 20px 0;
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: -20px;
  left: 10%;
  width: 80%;

  button {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Tags = styled.aside`
  position: absolute;
  top: 0;
  left: -32px;
  > * {
    background: white;
    margin-bottom: 2px;
    padding: 8px 2px;
    border: 5px solid ${theme.pallet.BLACK};
    border-left: none;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }
`;

export const ExternalLinkIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;
