import styled from 'styled-components';
import {Text} from '../';

export const Image = styled.div`
  height: 300px;
  width: 500px;
  background: #eee;
  opacity: 0.5;
  position: absolute;
  z-index: 800;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

export const ContentBody = styled.div`
  background: #39373a;
  padding: 15px;
  width: 100%;
  z-index: 900;
  margin-top: 20px;
`;

export const Tags = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Container = styled.article`
  position: relative;
  display: flex;
  min-height: 300px;
  margin-bottom: 50px;

  &:nth-child(even) {
    justify-content: flex-end;

    ${Image} {
      left: 0;
    }

    ${Content} {
    }

    h5 {
      text-align: right;
    }
  }

  &:nth-child(odd) {
    ${Image} {
      right: 0;
    }

    ${Content} {
    }
  }
`;
