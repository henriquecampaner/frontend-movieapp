import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: #111;
  min-height: 100vh;

  h1 {
    color: #fff;
    text-align: center;
    padding: 20px;
  }
`;

export const List = styled.ul`
  width: 1300px;
  margin: auto;
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
  list-style: none;
  flex-wrap: wrap;

  li {
    flex: 1;
    color: #fff;
    margin-top: 30px;

    img {
      width: 300px;
    }

    h3 {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 5px;
      margin-top: auto;
    }

    p {
      font-size: 15px;

      svg {
        margin-right: 5px;
      }
    }

    span {
      font-size: 15px;

      svg {
        margin-right: 8px;
      }
    }
  }
`;
