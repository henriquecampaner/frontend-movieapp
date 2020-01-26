import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Head = styled.header`
  height: 130px;
  width: 100%;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 1300px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 100px;
    margin-left: 30px;
  }
`;

export const NavIcon = styled(Link)`
  text-decoration: none;
  padding: 20px;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
